# The Evidence Desk

A MomOps prototype for a cosmetic safety evidence database. The first tool is
"Is this on record?": the user enters a product name or scans a barcode, then
sees public records connected to that product: lawsuits, FDA recalls, FDA
adverse-event reports, warning letters, import alerts, and scientific literature.

## Product Principle

The site should not say "this product causes cancer" unless that is supported by
the exact source shown. It should label each record by evidentiary strength:

- `alleged`: claims in a complaint, lawsuit, or demand letter
- `reported`: adverse-event reports submitted to FDA or another regulator
- `recalled`: official recall, market withdrawal, or safety alert
- `regulated`: warning letter, import alert, inspection finding, or enforcement
- `studied`: peer-reviewed paper or public health study
- `settled`: settlement without necessarily admitting liability
- `found`: judicial finding, verdict, or agency determination

## Starter Data Sources

- openFDA Cosmetic Events API: https://open.fda.gov/apis/cosmetic/
- FDA Recalls, Market Withdrawals, and Safety Alerts: https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/
- FDA Enforcement Reports: https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/enforcement-reports
- FDA Cosmetics Compliance and Enforcement: https://www.fda.gov/cosmetics/cosmetics-compliance-enforcement
- FDA MoCRA overview: https://www.fda.gov/cosmetics/cosmetics-laws-regulations/modernization-cosmetics-regulation-act-2022-mocra
- CourtListener Search API: https://www.courtlistener.com/help/api/rest/search/
- EU Safety Gate: https://ec.europa.eu/safety-gate/
- European e-Justice Portal and ECLI search: https://e-justice.europa.eu/home.do
- UK product safety alerts, reports, and recalls: https://www.gov.uk/product-safety-alerts-reports-recalls

## Jurisdiction Coverage

U.S. lawsuits can start with CourtListener/RECAP and then expand into state
court portals. Europe should be handled differently: EU Safety Gate is strong
for dangerous product alerts and recalls, but lawsuits are fragmented by
country. The product should store country, court, language, case identifier, and
source URL for every European legal record instead of treating "Europe" as one
court system.

## Production Shape

1. Resolve barcode to product identity.
2. Normalize product, brand, responsible company, parent company, size, variant,
   lot code, and sale date.
3. Search public records by exact identifiers first, then fuzzy aliases.
4. Store evidence as linked records, not as one blended risk score.
5. Show a consumer summary plus the source, date, jurisdiction, status, and
   evidentiary label for every claim.

## Current State

This is a public-facing **preview**, not a live cosmetic safety database. The five
cards are research topics. Search only filters those topics; scanning reads a code
but does not resolve a product or check a recall. No result here is a safety or
legal determination. See `REVIEW.md` for the product and evidence assessment.

## Local Preview

Open `index.html` in a browser, or serve this folder with any static file server.

## Cloudflare Workers Preview

The static assets are copied into `dist/` so only the site files are published.
Use Node.js 20 or newer:

```sh
npm install
npm run dev
```

To publish to the `evidence-desk-preview` Worker in the selected Cloudflare account:

```sh
npm run deploy
```

The Worker configuration is in `wrangler.jsonc`. The `*.workers.dev` address is
printed by Wrangler after deployment. This is a manual deployment; pushes to
GitHub do not automatically update the Worker.
