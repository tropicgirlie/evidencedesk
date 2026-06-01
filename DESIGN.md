# Design

## Theme

Public health case file. The page should feel like a regulator archive made legible for consumers: white paper, dense black type, deep bottle green, and sharp evidence-status color.

## Color

Use OKLCH tokens only.

- Background: pure white
- Ink: near-black neutral
- Primary: deep bottle green from the brand seed
- Accent: red docket mark for high-risk legal/regulatory emphasis
- Amber: recall and caution states
- Surface: quiet neutral panels without warm cream tint

## Typography

Use a distinctive editorial sans/display combination without defaulting to generic system UI. Headings should be compressed and assertive; body copy should be readable and calm. Avoid decorative serif magazine tropes.

## Layout

The first viewport is an investigation desk: masthead, decisive title, search dossier, and evidence scope. Results should read like public records, with jurisdiction and evidence type visible near the top of each record.

## Components

- Masthead: small publication-like identity bar
- Search dossier: product/barcode input, scan action, jurisdiction controls
- Evidence scope: compact labels for recalls, lawsuits, adverse events, and regulatory actions
- Record: docket-style evidence item with risk, jurisdiction, summary, evidence bullets, and primary source links
- Build notes: lower-priority implementation roadmap

## Motion

Use brief, purposeful motion only for result updates, scanner state, and link focus. Respect `prefers-reduced-motion`.
