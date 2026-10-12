# Evidence Desk: product and evidence review

Reviewed 12 October 2026 against the GitHub prototype. This is a planning review,
not a legal opinion, medical advice, or a product safety finding.

## Direction

The evidence-index concept is useful if each result answers a narrow question:
**What public record names this exact product, and what does that record actually
say?** The first release should cover one jurisdiction and one record class well.
A sensible first slice is U.S. cosmetic recalls, because official notices often
identify products and affected lots. Add adverse-event reports and litigation
only after provenance, identity matching, and editorial review are working.

## Current gaps, in priority order

1. **Identity matching.** The current scanner only decodes a barcode. It has no
   UPC/EAN catalog, and a barcode alone may not identify an affected lot. Require
   brand, full product name, variant, size, and lot or batch where relevant.
2. **Source provenance.** The prototype stores topic text in JavaScript. Each
   future finding needs a direct source URL, issuing authority or court, record
   identifier, source date, retrieval date, jurisdiction, verbatim excerpt,
   editorial summary, and review history.
3. **Evidence classification.** Keep allegations, filed claims, settlements,
   judicial findings, agency actions, recalls, adverse-event reports, and studies
   separate. Do not turn them into a single color or risk score. A complaint
   proves a claim was filed; it does not prove the claim's underlying facts.
4. **Coverage and freshness.** Show which sources and dates were searched and
   when they were last refreshed. A missing record means only that the checked
   sources did not return a verified match.
5. **Consumer action.** For a verified recall, link to the notice, quote the
   affected identifiers, show the notice's consumer instructions, and preserve
   its publication and update dates. For a possible match, ask the user to
   confirm the lot rather than declaring a recall.
6. **Editorial controls.** Require a reviewer for high-impact summaries and
   corrections, with a way for brands or users to report an error. Keep the
   original source and a change log.

## Suggested data model

- `product`: brand, name, variant, size, barcode(s), manufacturer, identifiers.
- `source_record`: record type, authority, jurisdiction, identifier, dates, URL,
  source text snapshot, and retrieval timestamp.
- `product_record_match`: product ID, source ID, matched fields, lot scope,
  match confidence, reviewer, and review date.
- `claim`: short neutral statement, evidence state, source excerpt, citations,
  status history, and correction history.

## Legal and scientific review points

- U.S. cosmetics generally lack FDA premarket approval, apart from color
  additives; avoid UI language that implies FDA approval or its absence is a
  safety verdict. [FDA explanation](https://www.fda.gov/industry/fda-basics-industry/does-fda-approve-cosmetics-they-go-market).
- FDA says an adverse-event report does not establish causation, may be
  incomplete or unverified, and cannot establish an occurrence rate.
  [FDA data limitations](https://www.fda.gov/safety/fda-adverse-event-monitoring-system-aems).
- A real recall may apply only to specified lots. The
  [FDA-posted 2022 dry-shampoo recall](https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/unilever-issues-voluntary-us-recall-select-dry-shampoos-due-potential-presence-benzene)
  is a concrete example. Product-level claims must include the notice's scope
  and consumer instructions.
- EU Safety Gate circulates authority alerts for dangerous non-food products;
  it is not a pan-European litigation docket.
  [European Commission](https://ec.europa.eu/safety-gate/). UK notices come
  from a separate [official service](https://www.gov.uk/product-safety-alerts-reports-recalls).
- Before a real public launch, have qualified counsel review U.S. and target
  country rules for product claims, defamation, privacy, corrections, and the
  treatment of user-submitted health information. Have a cosmetic toxicologist
  or safety assessor review any health-risk interpretation. Neither role should
  be replaced by an AI summary.

## Next build milestone

Implement a U.S. recall-only result flow with 10 to 20 manually verified notices,
including one lot-specific example and one ambiguous product match. Test the
complete flow with consumers before connecting more sources or assigning risk
levels. Treat AI as an extraction and drafting aid whose output is checked
against the primary record before publication.
