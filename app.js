const records = [
  {
    id: "mdl-3060",
    label: "alleged",
    labelText: "Alleged",
    system: "us",
    brand: "L'Oréal and other manufacturers",
    title: "In re: Hair Relaxer Marketing, Sales Practices, and Products Liability Litigation",
    issuer: "U.S. District Court for the Northern District of Illinois",
    identifier: "MDL No. 3060; master docket 1:23-cv-00818",
    date: "February 9, 2023",
    summary:
      "The Judicial Panel on Multidistrict Litigation transferred hair-relaxer product cases to Judge Mary M. Rowland. The transfer schedule includes actions naming L'Oréal USA, Inc., Strength of Nature Global, LLC, and Revlon Consumer Products Corp. The claims concern chemical hair straighteners and relaxers.",
    limit:
      "A complaint and a transfer order are allegations and a procedural step. They do not find that a particular bottle caused an injury, and they do not decide a case outside the United States.",
    hereNote: "This is a U.S. federal docket about chemical hair straighteners and relaxers. It is not the Safety Gate file for L'Oréal FIX & FORCE hair gel.",
    elsewhereNote: "This is a U.S. federal docket. It does not open a case in the country of purchase.",
    defaultMatch: "Company named",
    matchDetail: "The transfer schedule names manufacturers. It does not identify a barcode or a lot.",
    barcodes: [],
    lots: [],
    keywords: [
      "hair relaxer",
      "hair straightener",
      "straightener",
      "relaxer",
      "loreal",
      "l'oreal",
      "uterine",
      "mdl 3060",
      "23-cv-00818",
      "revlon",
      "strength of nature",
      "dark and lovely"
    ],
    facts: [
      ["Court", "N.D. Ill., Judge Mary M. Rowland"],
      ["Parties on the transfer schedule", "L'Oréal USA, Inc.; Strength of Nature Global, LLC; Revlon Consumer Products Corp."],
      ["Product named", "Chemical hair straighteners and relaxers, not a single barcode"]
    ],
    sources: [
      ["CourtListener docket", "https://www.courtlistener.com/docket/66801859/in-re-hair-relaxer-marketing-sales-practices-and-products-liability/"],
      ["JPML transfer order", "https://www.jpml.uscourts.gov/sites/jpml/files/MDL-3060-Transfer_Order-1-23.pdf"]
    ]
  },
  {
    id: "jnci-2022",
    label: "studied",
    labelText: "Studied",
    system: "science",
    brand: "Chemical hair straighteners",
    title: "Use of Straighteners and Other Hair Products and Incident Uterine Cancer",
    issuer: "JNCI: Journal of the National Cancer Institute",
    identifier: "Chang et al., 2022; doi:10.1093/jnci/djac165",
    date: "October 17, 2022",
    summary:
      "In the U.S. Sister Study, 33,947 participants with a uterus were followed for an average of 10.9 years, and 378 uterine cancer cases were identified. Ever using straighteners, relaxers, or pressing products in the previous 12 months was associated with a higher rate (HR 1.80, 95% CI 1.12 to 2.88). Use more than four times in that year was associated with a higher rate (HR 2.55, 95% CI 1.46 to 4.45).",
    limit:
      "The paper reports an association in that cohort. It does not name a brand, a barcode, or a lot, and it does not find that a product caused an individual cancer.",
    hereNote: "The exposure is straightener, relaxer, or pressing-product use in a U.S. cohort. Dyes and permanents were not associated in this paper.",
    elsewhereNote: "The exposure is straightener, relaxer, or pressing-product use in a U.S. cohort. Dyes and permanents were not associated in this paper.",
    defaultMatch: "Category only",
    matchDetail: "The exposure is a product category, not the bottle in hand.",
    barcodes: [],
    lots: [],
    keywords: [
      "hair relaxer",
      "hair straightener",
      "straightener",
      "relaxer",
      "pressing",
      "uterine",
      "sister study",
      "jnci",
      "djac165"
    ],
    facts: [
      ["Population", "33,947 Sister Study participants, ages 35–74 at enrollment"],
      ["Exposure", "Self-reported straightener, relaxer, or pressing-product use in the previous 12 months"],
      ["Outcome", "378 incident uterine cancer cases"]
    ],
    sources: [
      ["Paper", "https://doi.org/10.1093/jnci/djac165"],
      ["NIEHS summary", "https://www.niehs.nih.gov/newsreleases/hair-straightening-chemicals-associated-with-higher-uterine-cancer-risk"]
    ]
  },
  {
    id: "unilever-2022",
    label: "recalled",
    labelText: "Recalled",
    system: "us",
    brand: "Dove, Nexxus, Suave, TIGI, TRESemmé",
    title: "Unilever voluntary U.S. recall of select aerosol dry shampoos",
    issuer: "Unilever United States, published by FDA",
    identifier: "Company announcement October 18, 2022; FDA publish date October 21, 2022",
    date: "October 18, 2022",
    summary:
      "Unilever recalled select lot codes of Dove, Nexxus, Suave, TIGI (Rockaholic and Bed Head), and TRESemmé aerosol dry shampoos produced before October 2021, after potentially elevated benzene in the propellant. Distribution was nationwide in the United States. Unilever reported no adverse events related to this recall and said the detected levels were not expected to cause adverse health consequences from daily exposure.",
    limit:
      "Only the listed products and lot codes are in the recall. Another dry shampoo, a later production date, or a purchase outside the United States is a different question.",
    hereNote: "Follow the FDA notice for a matching U.S. lot. Stop using a listed lot and use the remedy in the notice.",
    elsewhereNote: "This is a U.S. recall of products distributed in the United States. It does not say whether the country of purchase ordered a withdrawal.",
    defaultMatch: "Brand and product line",
    matchDetail: "The notice is lot-specific. A brand search is not yet a match to the can in hand.",
    barcodes: ["079400470317"],
    lots: ["01170KK06", "01180KK07", "02070KK08"],
    lotProduct: "Dove Dry Shampoo Go Active, 5 oz",
    keywords: [
      "dove",
      "dry shampoo",
      "benzene",
      "unilever",
      "tresemme",
      "tre semme",
      "suave",
      "nexxus",
      "tigi",
      "bed head",
      "aerosol",
      "079400470317",
      "79400470317"
    ],
    facts: [
      ["Reason", "Potentially elevated benzene in the propellant"],
      ["Scope", "Select lot codes produced before October 2021, distributed in the United States"],
      ["Sample identifiers stored here", "Dove Dry Shampoo Go Active, 5 oz; UPC 079400470317; lots 01170KK06, 01180KK07, 02070KK08"]
    ],
    sources: [
      ["FDA recall notice", "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/unilever-issues-voluntary-us-recall-select-dry-shampoos-due-potential-presence-benzene"]
    ]
  },
  {
    id: "safety-gate-trussardi",
    label: "regulated",
    labelText: "Regulated",
    system: "eu",
    brand: "Trussardi",
    title: "Safety Gate alert A12/01773/24, Trussardi eau de parfum",
    issuer: "European Commission Safety Gate; notifying country Italy",
    identifier: "Alert A12/01773/24",
    date: "July 5, 2024",
    summary:
      "Italy notified Safety Gate about Trussardi eau de parfum named My Name, 50 ml, barcode 8011530850012, batch 20H16AB2. The alert says the ingredient list includes BMHCA, which is prohibited in cosmetic products, and that the product does not comply with the Cosmetic Products Regulation. Authorities ordered the distributor to stop marketing the product. The order took effect on October 3, 2023.",
    limit:
      "The alert identifies this barcode and batch. It does not find an injury, and it is not a court judgment.",
    hereNote: "Safety Gate circulates this alert to EU and EEA authorities. Italy is the notifying country. Read the measure on the alert.",
    elsewhereNote: "This is an EU Safety Gate alert notified by Italy. It is not an FDA recall and it is not a U.S. or UK court filing.",
    defaultMatch: "Exact barcode and batch",
    matchDetail: "Barcode 8011530850012 and batch 20H16AB2 are printed in the alert.",
    barcodes: ["8011530850012"],
    lots: ["20H16AB2"],
    lotProduct: "Trussardi My Name eau de parfum, 50 ml",
    keywords: [
      "trussardi",
      "my name",
      "perfume",
      "eau de parfum",
      "bmhca",
      "a12/01773/24",
      "8011530850012",
      "20h16ab2"
    ],
    facts: [
      ["Notifying country", "Italy"],
      ["Barcode and batch", "8011530850012; batch 20H16AB2"],
      ["Measure", "Ban on marketing, ordered against the distributor, in force October 3, 2023"]
    ],
    sources: [
      ["Safety Gate alert", "https://ec.europa.eu/safety-gate-alerts/screen/webReport/alertDetail/10013414"]
    ]
  },
  {
    id: "safety-gate-loreal",
    label: "regulated",
    labelText: "Regulated",
    system: "eu",
    brand: "L'Oréal",
    title: "Safety Gate alert SR/00400/25, L'Oréal FIX & FORCE hair gel",
    issuer: "European Commission Safety Gate; notifying country Italy",
    identifier: "Alert SR/00400/25",
    date: "January 30, 2025",
    summary:
      "Italy notified Safety Gate about L'Oréal FIX & FORCE hair gel, a plastic bottle, country of origin France. The alert says the ingredient list includes BMHCA, which is prohibited in cosmetic products, and that the product does not comply with the Cosmetic Products Regulation.",
    limit:
      "This alert is about that hair gel. It is not evidence about a hair relaxer, and it is not the U.S. multidistrict docket.",
    hereNote: "Safety Gate circulates this alert to EU and EEA authorities. Italy is the notifying country. Match the brand and product name on the notice.",
    elsewhereNote: "This is an EU Safety Gate alert for a hair gel. It is a different document from the U.S. hair-relaxer docket, even though both name L'Oréal.",
    defaultMatch: "Brand and product name",
    matchDetail: "The stored alert identifies L'Oréal FIX & FORCE hair gel. Match the name on the package to the notice.",
    barcodes: [],
    lots: [],
    keywords: [
      "loreal",
      "l'oreal",
      "fix & force",
      "fix and force",
      "hair gel",
      "bmhca",
      "sr/00400/25"
    ],
    facts: [
      ["Notifying country", "Italy"],
      ["Product", "FIX & FORCE hair gel; origin France"],
      ["Legal provision cited", "Cosmetic Products Regulation"]
    ],
    sources: [
      ["Safety Gate alert", "https://ec.europa.eu/safety-gate-alerts/screen/webReport/alertDetail/10009164"]
    ]
  }
];

const countries = {
  us: { name: "United States", region: "us" },
  uk: { name: "United Kingdom", region: "uk" },
  at: { name: "Austria", region: "eu" },
  be: { name: "Belgium", region: "eu" },
  bg: { name: "Bulgaria", region: "eu" },
  hr: { name: "Croatia", region: "eu" },
  cy: { name: "Cyprus", region: "eu" },
  cz: { name: "Czechia", region: "eu" },
  dk: { name: "Denmark", region: "eu" },
  ee: { name: "Estonia", region: "eu" },
  fi: { name: "Finland", region: "eu" },
  fr: { name: "France", region: "eu" },
  de: { name: "Germany", region: "eu" },
  gr: { name: "Greece", region: "eu" },
  hu: { name: "Hungary", region: "eu" },
  ie: { name: "Ireland", region: "eu" },
  it: { name: "Italy", region: "eu" },
  lv: { name: "Latvia", region: "eu" },
  lt: { name: "Lithuania", region: "eu" },
  lu: { name: "Luxembourg", region: "eu" },
  mt: { name: "Malta", region: "eu" },
  nl: { name: "Netherlands", region: "eu" },
  pl: { name: "Poland", region: "eu" },
  pt: { name: "Portugal", region: "eu" },
  ro: { name: "Romania", region: "eu" },
  sk: { name: "Slovakia", region: "eu" },
  si: { name: "Slovenia", region: "eu" },
  es: { name: "Spain", region: "eu" },
  se: { name: "Sweden", region: "eu" }
};

const cards = document.querySelector("#cards");
const empty = document.querySelector("#empty");
const search = document.querySelector("#product-search");
const lotInput = document.querySelector("#lot-code");
const countrySelect = document.querySelector("#country");
const resultCount = document.querySelector("#result-count");
const nextStep = document.querySelector("#next-step");
const coverage = document.querySelector("#coverage");
const scanner = document.querySelector("#scanner");
const scanButton = document.querySelector("#scan-button");
const stopScanButton = document.querySelector("#stop-scan");
const camera = document.querySelector("#camera");
const scanStatus = document.querySelector("#scan-status");

let stream;
let detectorTimer;

function normalize(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "");
}

function digits(value) {
  return value.replace(/\D/g, "");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function currentCountry() {
  return countries[countrySelect.value];
}

function recordHaystack(record) {
  return normalize([
    record.brand,
    record.title,
    record.summary,
    record.identifier,
    ...record.keywords,
    ...record.barcodes,
    ...record.lots
  ].join(" "));
}

function matchesQuery(record, query) {
  if (!query) return true;
  const normalized = normalize(query);
  if (recordHaystack(record).includes(normalized)) return true;
  const queryDigits = digits(query);
  if (queryDigits.length < 8) return false;
  return record.barcodes.some((code) => digits(code) === queryDigits || digits(code).endsWith(queryDigits));
}

function lotHit(record, lot) {
  if (!lot) return false;
  return record.lots.some((code) => normalize(code) === normalize(lot));
}

function barcodeHit(record, query) {
  const queryDigits = digits(query);
  if (queryDigits.length < 8) return false;
  return record.barcodes.some((code) => digits(code) === queryDigits || digits(code).endsWith(queryDigits));
}

function matchesLot(record, lot, query) {
  if (!lot) return true;
  if (lotHit(record, lot)) return true;
  if (!query) return false;
  return matchesQuery(record, query);
}

function groupFor(record, country) {
  if (record.system === "science") return "science";
  if (record.system === country.region) return "here";
  return "elsewhere";
}

function matchState(record, query, lot) {
  const lotMatches = lotHit(record, lot);
  const codeMatches = barcodeHit(record, query);
  if (record.lots.length && lot && !lotMatches) {
    return {
      title: "Lot not in the stored list",
      detail: `${record.lotProduct} has sample lots stored from the notice. ${lot} is not one of them. The full notice may list more lots than this starter set.`
    };
  }
  if (codeMatches || lotMatches) {
    const parts = [];
    if (codeMatches) parts.push("barcode");
    if (lotMatches) parts.push("lot or batch");
    return {
      title: "Exact identifier",
      detail: `The ${parts.join(" and ")} matches ${record.lotProduct} on this document.`
    };
  }
  return { title: record.defaultMatch, detail: record.matchDetail };
}

function render() {
  const query = search.value;
  const lot = lotInput.value;
  const country = currentCountry();
  const filtered = records.filter((record) => matchesQuery(record, query) && matchesLot(record, lot, query));
  const groups = {
    here: filtered.filter((record) => groupFor(record, country) === "here"),
    science: filtered.filter((record) => groupFor(record, country) === "science"),
    elsewhere: filtered.filter((record) => groupFor(record, country) === "elsewhere")
  };

  const sections = [
    {
      key: "here",
      title: `In ${country.name}`,
      items: groups.here,
      emptyText: `No document in this starter set is an official record for a purchase in ${country.name}.`
    },
    { key: "science", title: "Scientific sources", items: groups.science, emptyText: "" },
    { key: "elsewhere", title: "Another legal system", items: groups.elsewhere, emptyText: "" }
  ];

  cards.classList.remove("is-updating");
  void cards.offsetWidth;
  cards.innerHTML = filtered.length
    ? sections.map((section) => renderGroup(section, query, lot, country)).join("")
    : "";
  cards.classList.add("is-updating");
  empty.hidden = filtered.length > 0;
  resultCount.textContent = filtered.length === records.length
    ? `${records.length} documents in the starter set, read for a purchase in ${country.name}`
    : `${filtered.length} matching document${filtered.length === 1 ? "" : "s"} for a purchase in ${country.name}`;
  nextStep.innerHTML = renderNextStep(country);
  coverage.innerHTML = renderCoverage(country);
}

function renderGroup(section, query, lot, country) {
  if (!section.items.length && !section.emptyText) return "";
  const body = section.items.length
    ? section.items.map((record) => renderCard(record, query, lot, country)).join("")
    : `<p class="group-empty">${escapeHtml(section.emptyText)}</p>`;
  return `
    <section class="record-group" aria-label="${escapeHtml(section.title)}">
      <h3>${escapeHtml(section.title)}</h3>
      <div class="cards">${body}</div>
    </section>
  `;
}

function renderCard(record, query, lot, country) {
  const match = matchState(record, query, lot);
  const context = groupFor(record, country) === "here" ? record.hereNote : record.elsewhereNote;
  const facts = record.facts
    .map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`)
    .join("");
  const sources = record.sources
    .map(([label, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`)
    .join("");

  return `
    <article class="card">
      <header>
        <div class="mark-row">
          <span class="evidence-label label-${record.label}">${escapeHtml(record.labelText)}</span>
          <span class="match">${escapeHtml(match.title)}</span>
        </div>
        <span class="brand">${escapeHtml(record.brand)}</span>
        <h3>${escapeHtml(record.title)}</h3>
        <span class="jurisdiction">${escapeHtml(record.issuer)}</span>
      </header>
      <div class="record-body">
        <p>${escapeHtml(record.summary)}</p>
        <dl class="fact-list">${facts}</dl>
        <p class="context">${escapeHtml(context)}</p>
        <p class="limit"><strong>Does not establish.</strong> ${escapeHtml(record.limit)}</p>
        <p class="match-detail">${escapeHtml(match.detail)}</p>
        <div class="source-row" aria-label="Primary documents">${sources}</div>
      </div>
    </article>
  `;
}

function renderNextStep(country) {
  const copy = {
    us: "Keep the bottle, carton, receipt, and photos of the barcode and lot code. A recalled lot follows the FDA notice. A serious reaction can be reported to FDA MedWatch. A legal claim is a separate step, brought through a lawyer in the relevant state. This desk does not calculate a filing deadline.",
    eu: "Keep the bottle, carton, receipt, and photos of the barcode, batch code, and responsible-person address on this device. A Safety Gate alert follows the measure on that alert. A serious undesirable effect goes to the competent authority of the Member State where it happened. A damages claim is a national case, or a representative action by a qualified entity where one exists. It is not a U.S. multidistrict case. This desk does not calculate a filing deadline.",
    uk: "Keep the bottle, carton, receipt, and photos of the barcode and batch code. A U.S. recall or an EU Safety Gate alert does not decide a UK purchase. Check an OPSS product-safety alert, and take any claim to a UK lawyer. This starter set does not include OPSS alerts or UK judgments, and it does not calculate a filing deadline."
  }[country.region];

  return `
    <strong>If this product is in your hand</strong>
    <p>${escapeHtml(copy)}</p>
  `;
}

function renderCoverage(country) {
  const courtDetail = {
    us: "The stored federal record is the MDL No. 3060 master docket. State-court cases are not included.",
    eu: `Judgments and representative actions in ${country.name} are not included. Safety Gate is not a court.`,
    uk: "UK judgments are not included. Safety Gate and FDA do not stand in for them."
  }[country.region];

  const items = [
    ["FDA recalls and market withdrawals", "Included", "Unilever dry-shampoo notice of October 18, 2022."],
    ["openFDA cosmetic adverse events", "Not queried", "CAERS is public in the United States. A report is not proof of cause, and this starter set does not count one."],
    ["U.S. federal dockets", "Included", "MDL No. 3060 master docket only."],
    ["U.S. state courts", "Not searched", "Many product cases are filed in state court."],
    ["EU Safety Gate", "Included", "Two cosmetics alerts, with notifying country, and barcode and batch where the alert prints them."],
    ["EU serious undesirable effects", "Not public", "A serious undesirable effect is reported to the Member State where it happened. There is no public search equivalent to CAERS."],
    ["UK product-safety alerts", "Not included", "OPSS is a separate system from FDA and from Safety Gate."],
    [`Courts for a purchase in ${country.name}`, country.region === "us" ? "Master docket only" : "Not searched", courtDetail]
  ];

  return items.map(([system, status, detail]) => `
    <article>
      <header>
        <h4>${escapeHtml(system)}</h4>
        <span class="coverage-status">${escapeHtml(status)}</span>
      </header>
      <p>${escapeHtml(detail)}</p>
    </article>
  `).join("");
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
      render();
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

search.addEventListener("input", render);
lotInput.addEventListener("input", render);
countrySelect.addEventListener("change", render);
scanButton.addEventListener("click", startScanner);
stopScanButton.addEventListener("click", () => {
  stopScanner();
  scanner.hidden = true;
});

render();
