// Curated from the linked FDA-posted company notices on 2026-10-12.
// Each notice is historical. The FDA source remains authoritative for current scope.
export const reviewedOn = "2026-10-12";

export const notices = [
  {
    id: "oribe-2026",
    brand: "Oribe",
    title: "Serene Scalp Densifying Shampoo",
    published: "2026-07-01",
    reason: "Possible Pluralibacter gergoviae contamination",
    scope: "Only the listed sizes and lots",
    action: "Discontinue use of an affected lot and contact Kao for replacement or questions.",
    url: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/kao-usa-voluntarily-recalls-some-lots-oribe-serene-scalp-densifying-shampoo",
    items: [
      { name: "Serene Scalp Densifying Shampoo 8.5 oz", upc: "840035231242", lots: ["YR010556"] },
      { name: "Serene Scalp Densifying Shampoo 33.8 oz", upc: "840035231273", lots: ["YR010566", "YR010576"] }
    ]
  },
  {
    id: "up-up-wipes-2026",
    brand: "Up & Up",
    title: "Fragrance Free and Fresh Cucumber Baby Wipes",
    published: "2026-06-05",
    reason: "Potential Burkholderia contamination",
    scope: "Listed UPCs plus manufacturing and expiration date ranges; compare both dates in the notice",
    action: "Stop using affected wipes and return them to a Target store for a refund.",
    url: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/target-recalls-fragrance-free-and-fresh-cucumber-scented-baby-wipes-due-potential-microbial",
    items: [
      { name: "Fragrance Free Baby Wipes 20 count", upc: "085239265956", manualCode: true },
      { name: "Fragrance Free Baby Wipes 72 count", upc: "085239265949", manualCode: true },
      { name: "Fragrance Free Baby Wipes 216 count", upc: "085239265963", manualCode: true },
      { name: "Fragrance Free Baby Wipes 800 count", upc: "085239266137", manualCode: true },
      { name: "Fragrance Free Baby Wipes 1200 count", upc: "085239266090", manualCode: true },
      { name: "Fresh Cucumber Baby Wipes 72 count", upc: "085239265970", manualCode: true },
      { name: "Fresh Cucumber Baby Wipes 216 count", upc: "085239265994", manualCode: true },
      { name: "Fresh Cucumber Baby Wipes 800 count", upc: "085239265987", manualCode: true }
    ]
  },
  {
    id: "tec-italy-2025",
    brand: "Tec Italy",
    title: "Totale Shampoo 33.81 fl oz / 1 L",
    published: "2025-03-26",
    reason: "Possible Klebsiella oxytoca contamination",
    scope: "UPC 7501438375850, lot 1G27542266",
    action: "Stop using the affected bottle and return it to the place of purchase for a refund.",
    url: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/henkel-capital-sa-de-cv-recalls-tec-italy-totale-shampoo-due-potential-health-risk",
    items: [
      { name: "Totale Shampoo 33.81 fl oz / 1 L", upc: "7501438375850", lots: ["1G27542266"] }
    ]
  },
  {
    id: "dynacare-expanded-2024",
    brand: "Dynacare",
    title: "Baby Powder, expanded recall",
    published: "2024-10-28",
    reason: "Possible asbestos contamination",
    scope: "Expanded notice covers the listed 14 oz and 4 oz batch numbers",
    action: "Stop using an affected batch and contact Dynarex about a return and refund.",
    url: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/dynarex-corporation-expands-recall-include-additional-products-due-possible-health-risk",
    items: [
      { name: "Baby Powder 14 oz, item 4875", lots: ["B048", "B049", "B050", "B051", "B052"] },
      { name: "Baby Powder 4 oz, item 4874", lots: ["B053", "B054", "B055", "B056", "B057", "B058", "B059", "B060"] }
    ]
  },
  {
    id: "bloodline-2024",
    brand: "Bloodline",
    title: "Water Based Tattoo Pigments",
    published: "2024-08-24",
    reason: "Microbial contamination",
    scope: "Three listed pigments and their batch/lot codes",
    action: "Tattoo artists and retailers should avoid using or selling the affected inks and follow the notice's disposal instructions.",
    url: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/sierra-stain-recalls-tattoo-pigments-because-possible-health-risk",
    items: [
      { name: "Carolina Blue 1/2 oz", lots: ["BL23"] },
      { name: "All Purpose Black 1 oz", lots: ["BL23"] },
      { name: "UV China Pink 1/2 oz", lots: ["SC23"] }
    ]
  },
  {
    id: "jergens-2022",
    brand: "Jergens",
    title: "Ultra Healing Moisturizer",
    published: "2022-03-18",
    reason: "Possible Pluralibacter gergoviae contamination",
    scope: "Only the listed 3 oz and 10 oz UPCs and lots",
    action: "For a listed lot, contact Kao Consumer Care for its return and coupon instructions.",
    url: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/kao-usa-conducts-voluntary-recall-jergensr-ultra-healing-moisturizer",
    items: [
      { name: "Ultra Healing Moisturizer 3 oz", upc: "019100109971", lots: ["ZU712851", "ZU712861", "ZU712871", "ZU712881", "ZU712911", "ZU722851", "ZU722881"] },
      { name: "Ultra Healing Moisturizer 3 oz, pack of 3", upc: "019100267114", lots: ["ZU712851", "ZU712861", "ZU712871", "ZU712881", "ZU712911", "ZU722851", "ZU722881"] },
      { name: "Ultra Healing Moisturizer 10 oz", upc: "019100109988", lots: ["ZU722741", "ZU722771", "ZU722781", "ZU732781", "ZU732791", "ZU732801", "ZU732811", "ZU732821"] }
    ]
  },
  {
    id: "babyganics-2022",
    brand: "Babyganics",
    title: "Chamomile Verbena Bubble Bath 20 oz",
    published: "2022-04-20",
    reason: "Pluralibacter gergoviae contamination",
    scope: "UPC 813277013754, lots Y314 and Y315",
    action: "For an affected bottle, follow the notice's refund and disposal instructions.",
    url: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/babyganics-issues-voluntary-recall-select-lots-babyganicsr-20oz-chamomile-verbena-bubble-bath",
    items: [
      { name: "Chamomile Verbena Bubble Bath 20 oz", upc: "813277013754", lots: ["Y314", "Y315"] }
    ]
  },
  {
    id: "claires-2019",
    brand: "Claire's",
    title: "Eyeshadows, Compact Powder, and Contour Palette",
    published: "2019-03-11",
    reason: "Possible asbestos in product samples",
    scope: "Three listed products, UPCs, and lots",
    action: "The notice says to stop using an affected product and return it to a Claire's store for a refund.",
    url: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/claires-stores-inc-announces-voluntary-recall-three-make-products",
    items: [
      { name: "Eyeshadows, SKU 84716", upc: "888711847165", lots: ["08/17"] },
      { name: "Compact Powder, SKU 83915", upc: "888711839153", lots: ["07/15"] },
      { name: "Contour Palette, SKU 40194", upc: "888711401947", lots: ["04/17"] }
    ]
  },
  {
    id: "yes-to-2020",
    brand: "Yes To",
    title: "Grapefruit Vitamin C Glow-Boosting Unicorn Paper Mask",
    published: "2020-01-16",
    reason: "Skin irritation complaints",
    scope: "All lots of this specific mask; no other Yes To products",
    action: "The notice gives refund instructions for unused product and company contact details for used product.",
    url: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/yes-inc-issues-voluntary-recall-product-due-skin-irritation-complaints-grapefruit-vitamin-c-glow",
    items: [
      { name: "Grapefruit Vitamin C Glow-Boosting Unicorn Paper Mask", allLots: true }
    ]
  },
  {
    id: "unilever-dry-shampoo-2022",
    brand: "Unilever",
    title: "Selected aerosol dry shampoos",
    published: "2022-10-21",
    reason: "Potential benzene contamination",
    scope: "Selected products and lots produced before October 2021; inspect the notice's linked product and UPC list",
    action: "Stop using an affected aerosol dry shampoo and follow the notice's reimbursement instructions.",
    url: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/unilever-issues-voluntary-us-recall-select-dry-shampoos-due-potential-presence-benzene",
    items: [
      { name: "Dove dry shampoo aerosols", manualCode: true },
      { name: "Nexxus dry shampoo aerosols", manualCode: true },
      { name: "Suave dry shampoo aerosols", manualCode: true },
      { name: "TIGI Rockaholic and Bed Head dry shampoo aerosols", manualCode: true },
      { name: "TRESemmé dry shampoo aerosols", manualCode: true }
    ]
  }
];
