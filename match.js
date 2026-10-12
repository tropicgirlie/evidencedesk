import { notices } from "./recalls.js";

export function normalizeText(value) {
  return String(value).normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/['’]/g, "").replace(/(\d)([a-z])/g, "$1 $2")
    .replace(/[^a-z0-9]+/g, " ").trim();
}

export function normalizeLot(value) {
  return String(value).toUpperCase().replace(/[^A-Z0-9]/g, "");
}

export function normalizeBarcode(value) {
  const digits = String(value).replace(/\D/g, "");
  return digits.replace(/^0+/, "") || digits;
}

function isBarcodeQuery(value) {
  return /^[\d\s-]{8,18}$/.test(value.trim()) && value.replace(/\D/g, "").length >= 8;
}

function itemMatchesText(notice, item, tokens) {
  const text = normalizeText(`${notice.brand} ${notice.title} ${item.name}`);
  const words = text.split(" ");
  return tokens.every((token) => words.some((word) => word === token ||
    (/^[a-z]{3,}$/.test(token) && word.startsWith(token))));
}

function assessItem(item, byBarcode, lot) {
  if (item.manualCode) return "manual";
  if (item.allLots) return "name-lead";
  if (!lot) return byBarcode ? "check-lot" : "name-lead";
  const listed = (item.lots || []).some((code) => normalizeLot(code) === lot);
  if (listed) return byBarcode ? "identifiers-match" : "lot-listed";
  return byBarcode ? "lot-not-listed" : "name-lead";
}

const priority = {
  "identifiers-match": 0,
  "lot-listed": 1,
  "check-lot": 2,
  manual: 3,
  "name-lead": 4,
  "lot-not-listed": 5,
  archive: 6
};

export function findNotices(productQuery, lotQuery = "") {
  const query = String(productQuery).trim();
  const lot = normalizeLot(lotQuery);
  if (!query) {
    return notices.map((notice) => ({ notice, items: notice.items, status: "archive" }));
  }

  const barcode = isBarcodeQuery(query);
  const code = barcode ? normalizeBarcode(query) : "";
  const tokens = barcode ? [] : normalizeText(query).split(" ").filter(Boolean);
  if (!barcode && tokens.join("").length < 3) return [];

  const results = notices.flatMap((notice) => {
    const items = notice.items.filter((item) => barcode
      ? item.upc && normalizeBarcode(item.upc) === code
      : itemMatchesText(notice, item, tokens));
    if (!items.length) return [];
    const statuses = items.map((item) => assessItem(item, barcode, lot));
    const status = statuses.sort((a, b) => priority[a] - priority[b])[0];
    return [{ notice, items, status }];
  });
  return results.sort((a, b) => priority[a.status] - priority[b.status] ||
    b.notice.published.localeCompare(a.notice.published));
}
