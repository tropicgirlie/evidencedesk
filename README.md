# The Evidence Desk

A small, source-linked index of ten U.S. cosmetic and personal-care recall notices. This first release helps a reader find an FDA-posted company notice and compare a product's barcode, lot, size, or date code with the original notice. It is a limited historical collection, reviewed on 12 October 2026, not a live recall database or a safety determination.

## Use it

Enter a product name, brand, UPC, or EAN. If the package has a lot or batch code, enter that too. A barcode can identify a product but usually cannot establish whether its lot is affected. Each result links directly to its FDA-posted notice and shows the indexed product identifiers and the notice's consumer instructions. Date ranges and external product lists require manual comparison in the source.

The public preview is at <https://evidence-desk-preview.luanagbc.workers.dev/>.

## Run locally

```sh
npm install
npm run dev
```

Wrangler prints the local URL. To run matching tests and build static assets:

```sh
npm test
npm run build
```

`npm run deploy` publishes the `dist` directory as Cloudflare Worker static assets, using `wrangler.jsonc` and the locally authenticated Cloudflare account.

## Editorial scope

The ten records in `recalls.js` are manually transcribed summaries of the linked company notices posted by FDA. They are not imported from a continuously updated feed. `match.js` deliberately treats product-name hits as leads, and a UPC without its affected lot as a request to check the lot. A missing result only means this small collection did not find a match. The source notice controls scope, current status, and action.

The project does not score safety, infer illness or causation, interpret toxicology, or index litigation in this release. Before expanding to those areas, see [REVIEW.md](REVIEW.md) for product, legal, scientific, and editorial work still needed. [BUSINESS.md](BUSINESS.md) records a revenue hypothesis and validation steps. Report corrections through this repository's issues with the notice URL and affected identifier.
