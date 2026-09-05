/**
 * STANDARD TESTS DATA
 * ---------------------------------------------
 * This file holds the default lab test catalogue.
 * Each test has: id, name, category, description, price (in INR)
 *
 * You normally will NOT need to edit this file.
 * For your OWN custom tests / pricing, edit "customTests.js" instead.
 */

export const STANDARD_TESTS = [
  {
    id: "cbc",
    name: "CBC (Complete Blood Count)",
    category: "Blood",
    description: "Measures RBC, WBC, platelets & hemoglobin levels.",
    price: 200
  },
  {
    id: "t3",
    name: "T3 (Triiodothyronine)",
    category: "Thyroid",
    description: "Checks thyroid hormone T3 levels.",
    price: 250
  },
  {
    id: "t4",
    name: "T4 (Thyroxine)",
    category: "Thyroid",
    description: "Checks thyroid hormone T4 levels.",
    price: 250
  },
  {
    id: "tsh",
    name: "TSH (Thyroid Stimulating Hormone)",
    category: "Thyroid",
    description: "Evaluates thyroid gland function.",
    price: 300
  },
  {
    id: "vitb12",
    name: "Vitamin B12",
    category: "Vitamins",
    description: "Detects Vitamin B12 deficiency.",
    price: 1090
  },
  {
    id: "lft",
    name: "LFT (Liver Function Test)",
    category: "Organ Function",
    description: "Panel to assess liver health (SGOT, SGPT, Bilirubin etc.).",
    price: 600
  },
  {
    id: "kft",
    name: "KFT (Kidney Function Test)",
    category: "Organ Function",
    description: "Panel to assess kidney health (Urea, Creatinine, Uric acid etc.).",
    price: 600
  },
  {
    id: "sugar_f",
    name: "Blood Sugar",
    category: "Diabetes",
    description: "Measures fasting blood glucose level.",
    price: 100
  },
  {
    id: "hba1c",
    name: "HbA1c (Average Blood Sugar - 3 months)",
    category: "Diabetes",
    description: "Average blood sugar levels over the last 3 months.",
    price: 500
  },
  {
    id: "lipid",
    name: "Lipid Profile",
    category: "Heart",
    description: "Cholesterol, HDL, LDL, Triglycerides panel.",
    price: 500
  },
  {
    id: "crp",
    name: "CRP (C-Reactive Protein)",
    category: "Infection/Inflammation",
    description: "Detects inflammation or infection in the body.",
    price: 300
  },
];

// COMBO PRICING
// If a customer selects ALL the ids listed in a combo (as individual tests),
// those individual prices are replaced by the single combo price below.
// Add more combos the same way if you want to bundle other tests together.
export const COMBOS = [
  {
    id: "thyroid_combo",
    name: "Thyroid Combo (T3 + T4 + TSH)",
    ids: ["t3", "t4", "tsh"],
    price: 500
  }
];

// Full Body Checkup combo package built from selected standard tests above.
// Editable: change the "includes" array (must match ids above) and "price".
export const PACKAGES = [
  {
    id: "full_body_basic",
    name: "Full Body Checkup - Basic",
    includes: ["cbc", "t3", "t4", "tsh", "lft", "kft", "urine", "sugar_f"],
    price: 1499,
    description: "Essential full body screening covering blood, thyroid, liver, kidney, urine & sugar."
  },
  {
    id: "full_body_advanced",
    name: "Full Body Checkup - Advanced",
    includes: ["cbc", "t3", "t4", "tsh", "vitb12", "vitd", "lft", "kft", "urine", "sugar_f", "sugar_pp", "hba1c", "lipid", "crp", "esr", "iron"],
    price: 2499,
    description: "Comprehensive screening covering all major organs, vitamins, diabetes & heart risk."
  },
];
