import { notices, reviewedOn } from "./recalls.js";
import { findNotices } from "./match.js";

const cards = document.querySelector("#cards");
const empty = document.querySelector("#empty");
const productInput = document.querySelector("#product-search");
const lotInput = document.querySelector("#lot-search");
const resultCount = document.querySelector("#result-count");
const matchMessage = document.querySelector("#match-message");
const scanner = document.querySelector("#scanner");
const scanButton = document.querySelector("#scan-button");
const stopScanButton = document.querySelector("#stop-scan");
const camera = document.querySelector("#camera");
const scanStatus = document.querySelector("#scan-status");

document.querySelector("#collection-size").textContent = String(notices.length);

let stream;
let detectorTimer;
let readingCode = false;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric", month: "short", year: "numeric", timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00Z`));
}

const labels = {
  "identifiers-match": "Barcode and lot listed",
  "lot-listed": "Lot listed; check product",
  "check-lot": "Barcode listed; check lot",
  manual: "Check codes in source",
  "name-lead": "Product name lead",
  "lot-not-listed": "Lot not listed here",
  archive: "FDA-posted notice"
};

const explanations = {
  "identifiers-match": "The entered barcode and lot appear together in this indexed notice. Check your package details and the FDA-posted source before acting.",
  "lot-listed": "The entered lot appears in this notice, but the product was found by name. Confirm the exact brand, size, and barcode in the source.",
  "check-lot": "The barcode appears in this notice. Enter the package lot to narrow the match.",
  manual: "This notice uses dates or an external product list. Compare every affected identifier directly in the source.",
  "name-lead": "The name resembles a product in this notice. Check the exact product, barcode, and affected code in the source.",
  "lot-not-listed": "The barcode appears here, but the entered lot is not among this notice's indexed lots. This is not a safety clearance; other notices may exist.",
  archive: "Historical company announcement posted by FDA. Open the source for its complete scope and current status."
};

function renderItem(item) {
  const code = item.upc ? `<span>UPC ${escapeHtml(item.upc)}</span>` : "";
  const lots = item.lots?.length ? `<span>Lots ${escapeHtml(item.lots.join(", "))}</span>` : "";
  const manual = item.manualCode ? "<span>Check dates / codes in source</span>" : "";
  const all = item.allLots ? "<span>All lots in notice</span>" : "";
  return `<li><strong>${escapeHtml(item.name)}</strong><div class="item-codes">${code}${lots}${manual}${all}</div></li>`;
}

function renderCard({ notice, items, status }) {
  const extra = notice.items.length > items.length
    ? `<p class="other-items">This notice includes ${notice.items.length - items.length} other listed product${notice.items.length - items.length === 1 ? "" : "s"}. Read the source for the full scope.</p>`
    : "";
  return `
    <article class="card">
      <header>
        <span class="brand">${escapeHtml(notice.brand)}</span>
        <h3>${escapeHtml(notice.title)}</h3>
        <span class="jurisdiction">U.S. · FDA-posted company notice · ${escapeHtml(formatDate(notice.published))}</span>
        <span class="risk ${escapeHtml(status)}">${escapeHtml(labels[status])}</span>
      </header>
      <div class="record-body">
        <p>${escapeHtml(explanations[status])}</p>
        <dl class="record-facts">
          <div><dt>Reason stated</dt><dd>${escapeHtml(notice.reason)}</dd></div>
          <div><dt>Affected scope</dt><dd>${escapeHtml(notice.scope)}</dd></div>
          <div><dt>Notice instructions</dt><dd>${escapeHtml(notice.action)}</dd></div>
        </dl>
        <details class="item-details" ${status === "archive" ? "" : "open"}>
          <summary>Listed products and codes (${items.length})</summary>
          <ul class="item-list">${items.map(renderItem).join("")}</ul>
        </details>
        ${extra}
        <div class="source-row"><a href="${escapeHtml(notice.url)}" target="_blank" rel="noopener noreferrer">Read FDA-posted notice ↗</a></div>
        <small class="source-note">Indexed ${escapeHtml(formatDate(reviewedOn))}. This page is an aid to reading the source, not FDA's current recall status.</small>
      </div>
    </article>
  `;
}

function render() {
  const query = productInput.value.trim();
  const results = findNotices(query, lotInput.value);
  cards.innerHTML = results.map(renderCard).join("");
  empty.hidden = results.length > 0 || !query;
  resultCount.textContent = query
    ? `${results.length} notice${results.length === 1 ? "" : "s"} in this collection`
    : `Showing all ${notices.length} notices`;

  matchMessage.hidden = !query || results.length === 0;
  if (!matchMessage.hidden) {
    const definite = results.some((result) => result.status === "identifiers-match");
    matchMessage.textContent = definite
      ? "An exact barcode and lot appear in a notice below. Confirm the package and follow the source notice."
      : "These are possible leads in a limited index. Check all affected identifiers in the source notice.";
  }
}

function stopScanner() {
  window.clearInterval(detectorTimer);
  detectorTimer = undefined;
  readingCode = false;
  scanner.classList.remove("is-scanning");
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = undefined;
  }
  camera.srcObject = null;
}

async function startScanner() {
  if (stream) return;
  scanner.hidden = false;
  if (!("BarcodeDetector" in window) || !navigator.mediaDevices?.getUserMedia) {
    scanStatus.textContent = "Barcode scanning is unavailable in this browser. Type the UPC or EAN from the package.";
    return;
  }

  try {
    const detector = new BarcodeDetector({ formats: ["ean_13", "ean_8", "upc_a", "upc_e"] });
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false });
    camera.srcObject = stream;
    await camera.play();
    scanner.classList.add("is-scanning");
    scanStatus.textContent = "Point the camera at the barcode. Then check the lot code on the package.";
    detectorTimer = window.setInterval(async () => {
      if (readingCode) return;
      readingCode = true;
      try {
        const codes = await detector.detect(camera);
        if (codes.length) {
          productInput.value = codes[0].rawValue;
          render();
          scanStatus.textContent = `Read barcode ${codes[0].rawValue}. Enter the lot code to narrow the result.`;
          stopScanner();
        }
      } catch {
        scanStatus.textContent = "The camera could not read a barcode. Type the code from the package.";
        stopScanner();
      } finally {
        readingCode = false;
      }
    }, 500);
  } catch {
    stopScanner();
    scanStatus.textContent = "Camera access was unavailable. Type the UPC or EAN from the package.";
  }
}

productInput.addEventListener("input", render);
lotInput.addEventListener("input", render);
scanButton.addEventListener("click", startScanner);
stopScanButton.addEventListener("click", () => { stopScanner(); scanner.hidden = true; });
document.addEventListener("visibilitychange", () => { if (document.hidden) stopScanner(); });
render();
