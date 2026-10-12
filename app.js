const records = [
  {
    brand: "Hair relaxer category",
    product: "Chemical hair straighteners and relaxers",
    barcodes: [],
    risk: "example",
    jurisdiction: "us",
    jurisdictionLabel: "U.S. litigation",
    riskLabel: "Topic example · no product match",
    summary:
      "Multiple lawsuits allege long-term use of some chemical hair relaxers is linked to uterine cancer and other hormone-related harms. These are allegations and scientific associations, not a finding that every product caused an injury.",
    evidence: [
      "Lawsuit: product-liability claims have been consolidated in federal multidistrict litigation.",
      "Science: studies have examined associations between frequent use of chemical hair straighteners and uterine cancer risk.",
      "Regulatory: this category should be tracked against FDA cosmetic adverse-event and enforcement records."
    ],
    sources: [
      ["Federal MDL 3060", "https://www.ilnd.uscourts.gov/mdl.aspx"],
      ["2022 Sister Study paper", "https://pubmed.ncbi.nlm.nih.gov/36245087/"],
      ["2023 Black Women's Health Study paper", "https://pubmed.ncbi.nlm.nih.gov/37821068/"]
    ],
    keywords: ["hair relaxer", "straightener", "uterine cancer", "litigation"]
  },
  {
    brand: "Talc category",
    product: "Talc-based body powders and cosmetic powders",
    barcodes: [],
    risk: "example",
    jurisdiction: "us",
    jurisdictionLabel: "U.S. litigation",
    riskLabel: "Topic example · no product match",
    summary:
      "Talc cosmetic litigation often centers on allegations of asbestos contamination or ovarian cancer risk. Any product-level result needs exact brand, lot, date, and court record matching.",
    evidence: [
      "Lawsuit: many talc claims have been filed over alleged cancer risks.",
      "Regulatory: talc and asbestos testing history should be linked per product and time period.",
      "Data quality: old packaging, reformulations, and discontinued SKUs make barcode-level matching essential."
    ],
    sources: [
      ["FDA talc testing", "https://www.fda.gov/cosmetics/cosmetic-ingredients/talc"],
      ["FDA lot-specific alert", "https://www.fda.gov/cosmetics/cosmetics-compliance-enforcement/fda-advises-consumers-stop-using-certain-cosmetic-products"]
    ],
    keywords: ["talc", "baby powder", "body powder", "ovarian cancer", "asbestos"]
  },
  {
    brand: "Aerosol dry shampoo category",
    product: "Aerosol dry shampoos with benzene recall history",
    barcodes: [],
    risk: "example",
    jurisdiction: "us",
    jurisdictionLabel: "U.S. recall / enforcement",
    riskLabel: "Topic example · check exact lots",
    summary:
      "An October 2022 U.S. recall covered selected lots of aerosol dry shampoos made by Unilever. A product-level result must match the exact brand, product, and lot in the notice; this preview does not perform that match.",
    evidence: [
      "Recall: FDA recall and enforcement records may include product descriptions, lots, recall reason, and firm.",
      "Risk: benzene is a known carcinogen, but recall presence depends on specific affected products.",
      "Action: barcode plus lot-code capture matters more than a broad category warning."
    ],
    sources: [
      ["FDA-posted recall notice", "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/unilever-issues-voluntary-us-recall-select-dry-shampoos-due-potential-presence-benzene"]
    ],
    keywords: ["dry shampoo", "aerosol", "benzene", "recall"]
  },
  {
    brand: "Any cosmetic product",
    product: "Adverse-event report watchlist",
    barcodes: [],
    risk: "example",
    jurisdiction: "us",
    jurisdictionLabel: "U.S. adverse-event data",
    riskLabel: "Topic example · reports are not proof",
    summary:
      "FDA adverse-event reports can support investigation, but a report does not prove that a product caused an event. This preview has no report counts or product-specific findings.",
    evidence: [
      "Data: openFDA exposes cosmetic adverse-event records for search and aggregation.",
      "Regulatory: MoCRA requires responsible persons to report serious adverse events to FDA.",
      "UX rule: any future counts need a dated source snapshot and a plain explanation of reporting limits."
    ],
    sources: [
      ["openFDA cosmetic events", "https://open.fda.gov/apis/cosmetic/event/"],
      ["FDA reporting limitations", "https://www.fda.gov/safety/fda-adverse-event-monitoring-system-aems"]
    ],
    keywords: ["adverse event", "reaction", "rash", "hair loss", "burn", "complaint"]
  },
  {
    brand: "EU / UK dangerous-products records",
    product: "Cosmetics flagged by Safety Gate or national product-safety alerts",
    barcodes: [],
    risk: "example",
    jurisdiction: "eu-uk",
    jurisdictionLabel: "EU / UK safety alerts",
    riskLabel: "Topic example · no product match",
    summary:
      "European coverage should start with EU Safety Gate and UK product-safety alerts. Lawsuits are not covered by one central EU docket, so litigation matching needs country-specific court sources and case-law indexes.",
    evidence: [
      "EU: Safety Gate circulates alerts for dangerous non-food products across EU and EEA authorities.",
      "UK: product-safety alerts and recalls can identify unsafe or non-compliant cosmetics sold in the UK.",
      "Litigation: EU/UK court coverage should be tagged by country and source because public access varies widely."
    ],
    sources: [
      ["EU Safety Gate", "https://ec.europa.eu/safety-gate/"],
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
    ? "Showing all topics"
    : `${filtered.length} matching topic${filtered.length === 1 ? "" : "s"}`;
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
        <div class="source-row" aria-label="Reference sources">${sources}</div>
        <small class="source-note">Reference sources for this topic. They do not establish a match to a product you searched.</small>
      </div>
    </article>
  `;
}

async function startScanner() {
  if (!("BarcodeDetector" in window)) {
    scanStatus.textContent = "Barcode scanning is not supported in this browser. Product lookup is not connected in this preview.";
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
    scanStatus.textContent = "Point the camera at a UPC or EAN barcode. Product lookup is not connected.";

    const detector = new BarcodeDetector({ formats: ["ean_13", "ean_8", "upc_a", "upc_e"] });
    detectorTimer = window.setInterval(async () => {
      try {
        const codes = await detector.detect(camera);
        if (!codes.length) return;
        scanStatus.textContent = `Scanned ${codes[0].rawValue}. This preview cannot identify the product or check records.`;
        stopScanner();
      } catch {
        scanStatus.textContent = "The camera could not read a barcode. Product lookup is not connected in this preview.";
        stopScanner();
      }
    }, 500);
  } catch (error) {
    scanner.hidden = false;
    scanStatus.textContent = "Camera access was not available. Product lookup is not connected in this preview.";
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
