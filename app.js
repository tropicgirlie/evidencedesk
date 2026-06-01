const records = [
  {
    brand: "Hair relaxer category",
    product: "Chemical hair straighteners and relaxers",
    barcodes: [],
    risk: "high",
    jurisdiction: "us",
    jurisdictionLabel: "U.S. litigation",
    riskLabel: "High concern: active litigation signal",
    summary:
      "Multiple lawsuits allege long-term use of some chemical hair relaxers is linked to uterine cancer and other hormone-related harms. These are allegations and scientific associations, not a finding that every product caused an injury.",
    evidence: [
      "Lawsuit: product-liability claims have been consolidated in federal multidistrict litigation.",
      "Science: studies have examined associations between frequent use of chemical hair straighteners and uterine cancer risk.",
      "Regulatory: this category should be tracked against FDA cosmetic adverse-event and enforcement records."
    ],
    sources: [
      ["CourtListener", "https://www.courtlistener.com/"],
      ["openFDA Cosmetic Events", "https://open.fda.gov/apis/cosmetic/"],
      ["FDA Cosmetics Enforcement", "https://www.fda.gov/cosmetics/cosmetics-compliance-enforcement"]
    ],
    keywords: ["hair relaxer", "straightener", "uterine cancer", "loreal", "softsheen", "dark and lovely", "motions"]
  },
  {
    brand: "Talc category",
    product: "Talc-based body powders and cosmetic powders",
    barcodes: [],
    risk: "high",
    jurisdiction: "us",
    jurisdictionLabel: "U.S. litigation",
    riskLabel: "High concern: long-running litigation",
    summary:
      "Talc cosmetic litigation often centers on allegations of asbestos contamination or ovarian cancer risk. Any product-level result needs exact brand, lot, date, and court record matching.",
    evidence: [
      "Lawsuit: many talc claims have been filed over alleged cancer risks.",
      "Regulatory: talc and asbestos testing history should be linked per product and time period.",
      "Data quality: old packaging, reformulations, and discontinued SKUs make barcode-level matching essential."
    ],
    sources: [
      ["FDA Cosmetics", "https://www.fda.gov/cosmetics"],
      ["CourtListener", "https://www.courtlistener.com/"],
      ["FDA Recalls", "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/"]
    ],
    keywords: ["talc", "baby powder", "body powder", "ovarian cancer", "asbestos"]
  },
  {
    brand: "Aerosol dry shampoo category",
    product: "Aerosol dry shampoos with benzene recall history",
    barcodes: [],
    risk: "medium",
    jurisdiction: "us",
    jurisdictionLabel: "U.S. recall / enforcement",
    riskLabel: "Medium concern: recall/enforcement matching needed",
    summary:
      "Some aerosol personal-care products have been recalled after benzene contamination concerns. A useful scanner should match the exact brand, lot code, and recall notice before warning a user.",
    evidence: [
      "Recall: FDA recall and enforcement records may include product descriptions, lots, recall reason, and firm.",
      "Risk: benzene is a known carcinogen, but recall presence depends on specific affected products.",
      "Action: barcode plus lot-code capture matters more than a broad category warning."
    ],
    sources: [
      ["FDA Recalls", "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/"],
      ["FDA Enforcement Reports", "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/enforcement-reports"],
      ["openFDA", "https://open.fda.gov/"]
    ],
    keywords: ["dry shampoo", "aerosol", "benzene", "recall"]
  },
  {
    brand: "Any cosmetic product",
    product: "Adverse-event report watchlist",
    barcodes: [],
    risk: "watch",
    jurisdiction: "us",
    jurisdictionLabel: "U.S. adverse-event data",
    riskLabel: "Watch: reports are signals, not proof",
    summary:
      "FDA adverse-event reports can reveal patterns, but a report does not prove the product caused the event. The database should show counts, trends, symptoms, seriousness, and reporting source without overstating causation.",
    evidence: [
      "Data: openFDA exposes cosmetic adverse-event records for search and aggregation.",
      "Regulatory: MoCRA requires responsible persons to report serious adverse events to FDA.",
      "UX rule: show report volume and seriousness alongside the limits of passive reporting."
    ],
    sources: [
      ["openFDA Cosmetic Events", "https://open.fda.gov/apis/cosmetic/"],
      ["FDA MoCRA", "https://www.fda.gov/cosmetics/cosmetics-laws-regulations/modernization-cosmetics-regulation-act-2022-mocra"],
      ["FDA MedWatch", "https://www.fda.gov/MedWatch"]
    ],
    keywords: ["adverse event", "reaction", "rash", "hair loss", "burn", "complaint"]
  },
  {
    brand: "EU / UK dangerous-products records",
    product: "Cosmetics flagged by Safety Gate or national product-safety alerts",
    barcodes: [],
    risk: "medium",
    jurisdiction: "eu-uk",
    jurisdictionLabel: "EU / UK safety alerts",
    riskLabel: "Medium concern: product-safety alert matching needed",
    summary:
      "European coverage should start with EU Safety Gate and UK product-safety alerts. Lawsuits are not covered by one central EU docket, so litigation matching needs country-specific court sources and case-law indexes.",
    evidence: [
      "EU: Safety Gate circulates alerts for dangerous non-food products across EU and EEA authorities.",
      "UK: product-safety alerts and recalls can identify unsafe or non-compliant cosmetics sold in the UK.",
      "Litigation: EU/UK court coverage should be tagged by country and source because public access varies widely."
    ],
    sources: [
      ["EU Safety Gate", "https://ec.europa.eu/safety-gate/"],
      ["European e-Justice Portal", "https://e-justice.europa.eu/home.do"],
      ["UK Product Safety Alerts", "https://www.gov.uk/product-safety-alerts-reports-recalls"]
    ],
    keywords: ["europe", "eu", "uk", "safety gate", "rapex", "recall", "dangerous product", "cosmetics"]
  }
];

const cards = document.querySelector("#cards");
const empty = document.querySelector("#empty");
const search = document.querySelector("#product-search");
const resultCount = document.querySelector("#result-count");
const scanner = document.querySelector("#scanner");
const scanButton = document.querySelector("#scan-button");
const stopScanButton = document.querySelector("#stop-scan");
const camera = document.querySelector("#camera");
const scanStatus = document.querySelector("#scan-status");
const jurisdictionInputs = document.querySelectorAll("input[name='jurisdiction']");

let stream;
let detectorTimer;

function normalize(value) {
  return value.trim().toLowerCase();
}

function matchesRecord(record, query) {
  if (!query) return true;
  const haystack = [
    record.brand,
    record.product,
    record.summary,
    ...record.keywords,
    ...record.barcodes
  ].join(" ").toLowerCase();

  return haystack.includes(query);
}

function currentJurisdiction() {
  return document.querySelector("input[name='jurisdiction']:checked").value;
}

function matchesJurisdiction(record, jurisdiction) {
  return jurisdiction === "all" || record.jurisdiction === jurisdiction;
}

function render(query = "") {
  const normalized = normalize(query);
  const jurisdiction = currentJurisdiction();
  const filtered = records.filter((record) => {
    return matchesRecord(record, normalized) && matchesJurisdiction(record, jurisdiction);
  });

  cards.classList.remove("is-updating");
  void cards.offsetWidth;
  cards.innerHTML = filtered.map(renderCard).join("");
  cards.classList.add("is-updating");
  empty.hidden = filtered.length > 0;
  resultCount.textContent = filtered.length === records.length
    ? "Showing all starter records"
    : `${filtered.length} matching record${filtered.length === 1 ? "" : "s"}`;
}

function renderCard(record) {
  const evidence = record.evidence.map((item) => `<li>${item}</li>`).join("");
  const sources = record.sources
    .map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`)
    .join("");

  return `
    <article class="card">
      <header>
        <span class="brand">${record.brand}</span>
        <h3>${record.product}</h3>
        <span class="jurisdiction">${record.jurisdictionLabel}</span>
        <span class="risk ${record.risk}">${record.riskLabel}</span>
      </header>
      <div class="record-body">
        <p>${record.summary}</p>
        <ul class="evidence-list">${evidence}</ul>
        <div class="source-row" aria-label="Sources">${sources}</div>
      </div>
    </article>
  `;
}

async function startScanner() {
  if (!("BarcodeDetector" in window)) {
    scanStatus.textContent = "Barcode scanning is not supported in this browser yet. Type the barcode instead.";
    scanner.hidden = false;
    return;
  }

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
      audio: false
    });
    camera.srcObject = stream;
    await camera.play();
    scanner.hidden = false;
    scanner.classList.add("is-scanning");
    scanStatus.textContent = "Point the camera at a UPC or EAN barcode.";

    const detector = new BarcodeDetector({ formats: ["ean_13", "ean_8", "upc_a", "upc_e"] });
    detectorTimer = window.setInterval(async () => {
      const codes = await detector.detect(camera);
      if (!codes.length) return;
      search.value = codes[0].rawValue;
      render(search.value);
      scanStatus.textContent = `Scanned ${codes[0].rawValue}`;
      stopScanner();
    }, 500);
  } catch (error) {
    scanner.hidden = false;
    scanStatus.textContent = "Camera access was not available. Type the barcode instead.";
  }
}

function stopScanner() {
  window.clearInterval(detectorTimer);
  detectorTimer = undefined;
  scanner.classList.remove("is-scanning");
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = undefined;
  }
  camera.srcObject = null;
}

search.addEventListener("input", (event) => render(event.target.value));
jurisdictionInputs.forEach((input) => {
  input.addEventListener("change", () => render(search.value));
});
scanButton.addEventListener("click", startScanner);
stopScanButton.addEventListener("click", () => {
  stopScanner();
  scanner.hidden = true;
});

render();
