import test from "node:test";
import assert from "node:assert/strict";
import { notices } from "../recalls.js";
import { findNotices } from "../match.js";

test("curated entries each have a direct FDA notice and a dated scope", () => {
  assert.equal(notices.length, 10);
  for (const notice of notices) {
    assert.match(notice.url, /^https:\/\/www\.fda\.gov\/safety\/recalls-market-withdrawals-safety-alerts\//);
    assert.match(notice.published, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(notice.scope && notice.action && notice.items.length);
  }
});

test("exact barcode and listed lot get the strongest result", () => {
  const [result] = findNotices("840035231242", "YR010556");
  assert.equal(result.notice.id, "oribe-2026");
  assert.equal(result.status, "identifiers-match");
});

test("UPC without lot only asks for a lot", () => {
  assert.equal(findNotices("840035231242")[0].status, "check-lot");
});

test("an unlisted lot is not called an affected match", () => {
  const [result] = findNotices("840035231242", "YR999999");
  assert.equal(result.status, "lot-not-listed");
});

test("product-name and lot cannot claim exact identifier match", () => {
  const [result] = findNotices("Oribe Densifying Shampoo", "YR010556");
  assert.equal(result.status, "lot-listed");
});

test("manual date ranges never auto-confirm a match", () => {
  const [result] = findNotices("085239265956", "071125X/XX");
  assert.equal(result.notice.id, "up-up-wipes-2026");
  assert.equal(result.status, "manual");
});

test("an EAN-13 leading zero can match a listed UPC-A", () => {
  const [result] = findNotices("00813277013754", "Y314");
  assert.equal(result.notice.id, "babyganics-2022");
  assert.equal(result.status, "identifiers-match");
});

test("batch punctuation is normalized but size remains relevant", () => {
  const [result] = findNotices("dynacare baby powder 4oz", "B 053");
  assert.equal(result.notice.id, "dynacare-expanded-2024");
  assert.equal(result.status, "lot-listed");
  assert.equal(result.items[0].name, "Baby Powder 4 oz, item 4874");
});

test("an unrelated barcode returns no result", () => {
  assert.deepEqual(findNotices("123456789012", "XYZ"), []);
});
