export const CONDITIONS_DAY_1 = [
  {
    id: "acne_vulgaris",
    name: "Acne Vulgaris (Acne)",
    category: "Inflammatory",
    description: {
      light: "A common inflammatory condition of the oil glands and hair follicles causing pimples, pustules, and sometimes cysts.",
      dark: "An inflammatory condition often presenting with dark marks after healing and a higher risk of thick or raised scars.",
      vitiligo: "Acne occurring on depigmented skin, where redness, scarring, and contrast are more noticeable."
    },
    symptoms: {
      light: ["Whiteheads", "Blackheads", "Red pimples"],
      dark: ["Dark papules", "Nodules", "Post-inflammatory hyperpigmentation"],
      vitiligo: ["Inflammatory bumps on depigmented skin"]
    },
    risks: {
      light: ["Permanent scarring"],
      dark: ["Keloids", "Long-lasting dark spots"],
      vitiligo: ["High-contrast scarring"]
    },
    images: {
      light: ["acne/light1.jpg", "acne/light2.jpg"],
      dark: ["acne/dark1.jpg", "acne/dark2.jpg"],
      vitiligo: ["acne/vitiligo1.jpg", "acne/vitiligo2.jpg"]
    }
  },

  {
    id: "atopic_dermatitis",
    name: "Atopic Dermatitis (Eczema)",
    category: "Inflammatory",
    description: {
      light: "A chronic itchy skin condition causing redness, dryness, and irritation.",
      dark: "Often appears as darker, thickened patches with intense itching rather than redness.",
      vitiligo: "Eczema affecting depigmented skin, making irritation and texture changes more visible."
    },
    symptoms: {
      light: ["Red patches", "Dry skin", "Itching"],
      dark: ["Hyperpigmented patches", "Skin thickening", "Severe itching"],
      vitiligo: ["Dry, inflamed areas on depigmented skin"]
    },
    risks: {
      light: ["Skin infections"],
      dark: ["Permanent color changes"],
      vitiligo: ["Skin breakdown"]
    },
    images: {
      light: ["eczema/light1.jpg", "eczema/light2.jpg"],
      dark: ["eczema/dark1.jpg", "eczema/dark2.jpg"],
      vitiligo: ["eczema/vitiligo1.jpg", "eczema/vitiligo2.jpg"]
    }
  },

  {
    id: "psoriasis",
    name: "Psoriasis Vulgaris (Psoriasis)",
    category: "Autoimmune",
    description: {
      light: "An autoimmune condition causing red plaques with silvery scale.",
      dark: "Plaques often appear purple, brown, or gray with thick scaling.",
      vitiligo: "Psoriatic plaques on depigmented skin may appear sharply outlined."
    },
    symptoms: {
      light: ["Red plaques", "Silvery scales"],
      dark: ["Dark plaques", "Thick scaling"],
      vitiligo: ["Raised scaly patches"]
    },
    risks: {
      light: ["Psoriatic arthritis"],
      dark: ["Misdiagnosis and delayed care"],
      vitiligo: ["Severe contrast lesions"]
    },
    images: {
      light: ["psoriasis/light1.jpg", "psoriasis/light2.jpg"],
      dark: ["psoriasis/dark1.jpg", "psoriasis/dark2.jpg"],
      vitiligo: ["psoriasis/vitiligo1.jpg", "psoriasis/vitiligo2.jpg"]
    }
  },

  {
    id: "rosacea",
    name: "Rosacea (Chronic Facial Redness)",
    category: "Inflammatory",
    description: {
      light: "A chronic facial condition causing redness, flushing, and visible blood vessels.",
      dark: "Often presents with burning, swelling, and acne-like bumps rather than redness.",
      vitiligo: "Inflammation on depigmented skin may appear more intense."
    },
    symptoms: {
      light: ["Facial redness", "Flushing"],
      dark: ["Papules", "Burning sensation"],
      vitiligo: ["Inflammatory facial lesions"]
    },
    risks: {
      light: ["Eye involvement"],
      dark: ["Delayed diagnosis"],
      vitiligo: ["Skin sensitivity"]
    },
    images: {
      light: ["rosacea/light1.jpg", "rosacea/light2.jpg"],
      dark: ["rosacea/dark1.jpg", "rosacea/dark2.jpg"],
      vitiligo: ["rosacea/vitiligo1.jpg", "rosacea/vitiligo2.jpg"]
    }
  },

  {
    id: "vitiligo",
    name: "Vitiligo (Depigmentation Disorder)",
    category: "Pigmentary",
    description: {
      light: "Loss of skin pigment causing white patches.",
      dark: "Highly visible depigmented patches with sharp borders.",
      vitiligo: "Condition affecting multiple areas with varying pigment loss."
    },
    symptoms: {
      light: ["White patches"],
      dark: ["Depigmented areas"],
      vitiligo: ["Expanding pigment loss"]
    },
    risks: {
      light: ["Sun sensitivity"],
      dark: ["Psychological distress"],
      vitiligo: ["Progressive spread"]
    },
    images: {
      light: ["vitiligo/light1.jpg", "vitiligo/light2.jpg"],
      dark: ["vitiligo/dark1.jpg", "vitiligo/dark2.jpg"],
      vitiligo: ["vitiligo/self1.jpg", "vitiligo/self2.jpg"]
    }
  }

  // Conditions 6–25 continue next message
];
,
{
  id: "seborrheic_dermatitis",
  name: "Seborrheic Dermatitis (Dandruff)",
  category: "Inflammatory",
  description: {
    light: "A common skin condition causing redness and flaky scales, especially on the scalp and face.",
    dark: "Often presents with flaky patches and lighter or darker discoloration rather than redness.",
    vitiligo: "Flaking and irritation on depigmented skin, often with noticeable contrast."
  },
  symptoms: {
    light: ["Flaking", "Red patches"],
    dark: ["Scaly patches", "Color changes"],
    vitiligo: ["Flaking on depigmented areas"]
  },
  risks: {
    light: ["Chronic recurrence"],
    dark: ["Persistent discoloration"],
    vitiligo: ["Skin irritation"]
  },
  images: {
    light: ["sebderm/light1.jpg", "sebderm/light2.jpg"],
    dark: ["sebderm/dark1.jpg", "sebderm/dark2.jpg"],
    vitiligo: ["sebderm/vitiligo1.jpg", "sebderm/vitiligo2.jpg"]
  }
},

{
  id: "alopecia_areata",
  name: "Alopecia Areata (Autoimmune Hair Loss)",
  category: "Autoimmune",
  description: {
    light: "An autoimmune condition causing sudden patchy hair loss.",
    dark: "Hair loss patches may be accompanied by color contrast on the scalp.",
    vitiligo: "Hair loss affecting depigmented scalp or skin areas."
  },
  symptoms: {
    light: ["Round hair loss patches"],
    dark: ["Patchy hair loss"],
    vitiligo: ["Hair loss on depigmented skin"]
  },
  risks: {
    light: ["Hair regrowth failure"],
    dark: ["Psychological distress"],
    vitiligo: ["Progressive hair loss"]
  },
  images: {
    light: ["alopecia/light1.jpg", "alopecia/light2.jpg"],
    dark: ["alopecia/dark1.jpg", "alopecia/dark2.jpg"],
    vitiligo: ["alopecia/vitiligo1.jpg", "alopecia/vitiligo2.jpg"]
  }
},

{
  id: "tinea_corporis",
  name: "Tinea Corporis (Ringworm)",
  category: "Infectious",
  description: {
    light: "A fungal infection causing ring-shaped, red, itchy patches.",
    dark: "Often presents with darker, scaly borders and central clearing.",
    vitiligo: "Ring-shaped lesions on depigmented skin may be sharply defined."
  },
  symptoms: {
    light: ["Ring-shaped rash", "Itching"],
    dark: ["Scaly dark patches"],
    vitiligo: ["Defined circular lesions"]
  },
  risks: {
    light: ["Spread of infection"],
    dark: ["Misdiagnosis"],
    vitiligo: ["Persistent infection"]
  },
  images: {
    light: ["ringworm/light1.jpg", "ringworm/light2.jpg"],
    dark: ["ringworm/dark1.jpg", "ringworm/dark2.jpg"],
    vitiligo: ["ringworm/vitiligo1.jpg", "ringworm/vitiligo2.jpg"]
  }
},

{
  id: "melasma",
  name: "Melasma (Facial Hyperpigmentation)",
  category: "Pigmentary",
  description: {
    light: "A pigment disorder causing brown or gray facial patches.",
    dark: "Common and often more intense, with darker facial patches.",
    vitiligo: "Hyperpigmented areas appearing next to depigmented skin."
  },
  symptoms: {
    light: ["Brown patches"],
    dark: ["Dark facial discoloration"],
    vitiligo: ["Uneven pigment contrast"]
  },
  risks: {
    light: ["Chronic recurrence"],
    dark: ["Persistent pigmentation"],
    vitiligo: ["Cosmetic distress"]
  },
  images: {
    light: ["melasma/light1.jpg", "melasma/light2.jpg"],
    dark: ["melasma/dark1.jpg", "melasma/dark2.jpg"],
    vitiligo: ["melasma/vitiligo1.jpg", "melasma/vitiligo2.jpg"]
  }
},

{
  id: "urticaria",
  name: "Urticaria (Hives)",
  category: "Allergic",
  description: {
    light: "An allergic reaction causing raised, itchy welts.",
    dark: "Welts may appear skin-colored or darker rather than red.",
    vitiligo: "Raised itchy areas on depigmented skin."
  },
  symptoms: {
    light: ["Raised welts", "Itching"],
    dark: ["Swollen patches"],
    vitiligo: ["Welts on depigmented areas"]
  },
  risks: {
    light: ["Chronic hives"],
    dark: ["Delayed diagnosis"],
    vitiligo: ["Severe itching"]
  },
  images: {
    light: ["hives/light1.jpg", "hives/light2.jpg"],
    dark: ["hives/dark1.jpg", "hives/dark2.jpg"],
    vitiligo: ["hives/vitiligo1.jpg", "hives/vitiligo2.jpg"]
  }
},

{
  id: "contact_dermatitis",
  name: "Contact Dermatitis (Skin Allergy)",
  category: "Allergic",
  description: {
    light: "Skin inflammation caused by contact with allergens or irritants.",
    dark: "Often presents with darkened, thickened skin rather than redness.",
    vitiligo: "Inflammation on depigmented skin from irritant exposure."
  },
  symptoms: {
    light: ["Red rash", "Blistering"],
    dark: ["Dark patches", "Itching"],
    viti
,
      {
  id: "lichen_planus",
  name: "Lichen Planus (Inflammatory Rash)",
  category: "Inflammatory",
  description: {
    light: "An inflammatory condition causing flat, itchy, purple-colored bumps.",
    dark: "Often appears dark brown or gray and may leave lasting pigmentation.",
    vitiligo: "Flat, itchy lesions on depigmented skin with sharp contrast."
  },
  symptoms: {
    light: ["Itchy flat bumps", "Purple rash"],
    dark: ["Dark papules", "Thickened skin"],
    vitiligo: ["Contrasting flat lesions"]
  },
  risks: {
    light: ["Chronic discomfort"],
    dark: ["Long-term discoloration"],
    vitiligo: ["Skin sensitivity"]
  },
  images: {
    light: ["lichen/light1.jpg", "lichen/light2.jpg"],
    dark: ["lichen/dark1.jpg", "lichen/dark2.jpg"],
    vitiligo: ["lichen/vitiligo1.jpg", "lichen/vitiligo2.jpg"]
  }
},

{
  id: "impetigo",
  name: "Impetigo (Bacterial Skin Infection)",
  category: "Infectious",
  description: {
    light: "A contagious bacterial infection causing honey-colored crusts.",
    dark: "Crusted lesions may appear darker and be mistaken for eczema.",
    vitiligo: "Crusting infection on depigmented skin with high visibility."
  },
  symptoms: {
    light: ["Crusting sores", "Red patches"],
    dark: ["Dark crusted lesions"],
    vitiligo: ["Crusted sores"]
  },
  risks: {
    light: ["Spread to others"],
    dark: ["Delayed treatment"],
    vitiligo: ["Skin breakdown"]
  },
  images: {
    light: ["impetigo/light1.jpg", "impetigo/light2.jpg"],
    dark: ["impetigo/dark1.jpg", "impetigo/dark2.jpg"],
    vitiligo: ["impetigo/vitiligo1.jpg", "impetigo/vitiligo2.jpg"]
  }
},

{
  id: "folliculitis",
  name: "Folliculitis (Hair Follicle Infection)",
  category: "Infectious",
  description: {
    light: "Inflammation of hair follicles causing small red bumps or pustules.",
    dark: "Often leaves dark spots and may be confused with acne.",
    vitiligo: "Inflamed follicles on depigmented skin."
  },
  symptoms: {
    light: ["Small pimples", "Itching"],
    dark: ["Dark bumps", "Tenderness"],
    vitiligo: ["Follicle-centered bumps"]
  },
  risks: {
    light: ["Recurrent infection"],
    dark: ["Post-inflammatory hyperpigmentation"],
    vitiligo: ["Skin irritation"]
  },
  images: {
    light: ["folliculitis/light1.jpg", "folliculitis/light2.jpg"],
    dark: ["folliculitis/dark1.jpg", "folliculitis/dark2.jpg"],
    vitiligo: ["folliculitis/vitiligo1.jpg", "folliculitis/vitiligo2.jpg"]
  }
},

{
  id: "onychomycosis",
  name: "Onychomycosis (Fungal Nail Infection)",
  category: "Nail",
  description: {
    light: "A fungal infection causing thick, yellow, brittle nails.",
    dark: "Nails may appear darkened and thickened.",
    vitiligo: "Fungal nail changes adjacent to depigmented skin."
  },
  symptoms: {
    light: ["Yellow nails", "Brittleness"],
    dark: ["Dark thickened nails"],
    vitiligo: ["Nail discoloration"]
  },
  risks: {
    light: ["Permanent nail damage"],
    dark: ["Spread to other nails"],
    vitiligo: ["Chronic infection"]
  },
  images: {
    light: ["nailfungus/light1.jpg", "nailfungus/light2.jpg"],
    dark: ["nailfungus/dark1.jpg", "nailfungus/dark2.jpg"],
    vitiligo: ["nailfungus/vitiligo1.jpg", "nailfungus/vitiligo2.jpg"]
  }
},

{
  id: "telogen_effluvium",
  name: "Telogen Effluvium (Stress-Related Hair Loss)",
  category: "Hair",
  description: {
    light: "Temporary hair shedding following stress or illness.",
    dark: "Diffuse thinning may be more noticeable due to scalp contrast.",
    vitiligo: "Hair shedding affecting depigmented scalp areas."
  },
  symptoms: {
    light: ["Increased shedding"],
    dark: ["Diffuse thinning"],
    vitiligo: ["Visible scalp areas"]
  },
  risks: {
    light: ["Chronic shedding"],
    dark: ["Psychological distress"],
    vitiligo: ["Persistent thinning"]
  },
  images: {
    light: ["telogen/light1.jpg", "telogen/light2.jpg"],
    dark: ["telogen/dark1.jpg", "telogen/dark2.jpg"],
    vitiligo: ["telogen/vitiligo1.jpg", "telogen/vitiligo2.jpg"]
  }
},

{
  id: "pityriasis_rosea",
  name: "Pityriasis Rosea (Self-Limited Rash)",
  category: "Inflammatory",
  description: {
    light: "A temporary rash starting with a single patch followed by smaller lesions.",
    dark: "Lesions may appear dark and persist longer.",
    vitiligo: "Oval patches on depigmented skin with clear borders."
  },
  symptoms: {
    light: ["Herald patch", "Oval rash"],
    dark: ["Dark scaly patches"],
    vitiligo: ["Contrasting oval lesions"]
  },
  risks: {
    light: ["Itching"],
    dark: ["Post-inflammatory pigmentation"],
    vitiligo: ["Cosmetic distress"]
  },
  images: {
    light: ["pr/light1.jpg", "pr/light2.jpg"],
    dark: ["pr/dark1.jpg", "pr/dark2.jpg"],
    vitiligo: ["pr/vitiligo1.jpg", "pr/vitiligo2.jpg"]
  }
},

{
  id: "scabies",
  name: "Scabies (Mite Infestation)",
  category: "Parasitic",
  description: {
    light: "A contagious infestation causing intense itching and burrows.",
    dark: "Burrows and nodules may be subtle but itching is severe.",
    vitiligo: "Burrows visible on depigmented skin."
  },
  symptoms: {
    light: ["Severe itching", "Burrows"],
    dark: ["Nodules", "Nighttime itching"],
    vitiligo: ["Visible burrows"]
  },
  risks: {
    light: ["Secondary infection"],
    dark: ["Misdiagnosis"],
    vitiligo: ["Skin breakdown"]
  },
  images: {
    light: ["scabies/light1.jpg", "scabies/light2.jpg"],
    dark: ["scabies/dark1.jpg", "scabies/dark2.jpg"],
    vitiligo: ["scabies/vitiligo1.jpg", "scabies/vitiligo2.jpg"]
  }
}
,
      {
  id: "hidradenitis_suppurativa",
  name: "Hidradenitis Suppurativa (Chronic Boils)",
  category: "Inflammatory",
  medicalName: "Hidradenitis Suppurativa",
  commonName: "Chronic Boils",
  audience: {
    consumer: "A long-term skin condition that causes painful bumps under the skin, especially in areas like the armpits and groin.",
    patient: "You may notice recurring painful lumps that can leak fluid and leave scars over time.",
    clinician: "A chronic inflammatory follicular occlusion disorder with nodules, abscesses, and sinus tract formation."
  },
  description: {
    light: "Painful red nodules and abscesses that may drain.",
    dark: "Lesions may appear deep, firm, and leave dark scars.",
    vitiligo: "Painful nodules forming on depigmented skin."
  },
  symptoms: {
    light: ["Red painful lumps", "Drainage"],
    dark: ["Deep nodules", "Scarring"],
    vitiligo: ["Tender nodules"]
  },
  risks: {
    light: ["Infection", "Scarring"],
    dark: ["Severe scarring", "Keloids"],
    vitiligo: ["Chronic inflammation"]
  },
  images: {
    light: ["hs/light1.jpg", "hs/light2.jpg"],
    dark: ["hs/dark1.jpg", "hs/dark2.jpg"],
    vitiligo: ["hs/vitiligo1.jpg", "hs/vitiligo2.jpg"]
  }
},

{
  id: "alopecia_areata",
  name: "Alopecia Areata (Patchy Hair Loss)",
  category: "Hair",
  medicalName: "Alopecia Areata",
  commonName: "Patchy Hair Loss",
  audience: {
    consumer: "An autoimmune condition that causes sudden hair loss in small round patches.",
    patient: "You may notice smooth bald spots that appear quickly and without pain.",
    clinician: "Autoimmune-mediated non-scarring alopecia affecting hair follicles."
  },
  description: {
    light: "Smooth circular bald patches with normal skin.",
    dark: "High contrast bald patches that are very noticeable.",
    vitiligo: "Often associated with vitiligo due to autoimmune link."
  },
  symptoms: {
    light: ["Round bald patches"],
    dark: ["Patchy hair loss"],
    vitiligo: ["Hair loss in depigmented areas"]
  },
  risks: {
    light: ["Hair regrowth uncertainty"],
    dark: ["Psychological distress"],
    vitiligo: ["Associated autoimmune conditions"]
  },
  images: {
    light: ["alopecia/light1.jpg", "alopecia/light2.jpg"],
    dark: ["alopecia/dark1.jpg", "alopecia/dark2.jpg"],
    vitiligo: ["alopecia/vitiligo1.jpg", "alopecia/vitiligo2.jpg"]
  }
},

{
  id: "sebaceous_cyst",
  name: "Epidermoid Cyst (Sebaceous Cyst)",
  category: "Cysts",
  medicalName: "Epidermoid Cyst",
  commonName: "Sebaceous Cyst",
  audience: {
    consumer: "A slow-growing, painless lump under the skin filled with keratin.",
    patient: "You may feel a firm bump that sometimes becomes inflamed or infected.",
    clinician: "Benign keratin-filled cyst arising from the follicular infundibulum."
  },
  description: {
    light: "Firm skin-colored lump under the skin.",
    dark: "May appear darker and leave pigmentation if inflamed.",
    vitiligo: "Cyst visible under depigmented skin."
  },
  symptoms: {
    light: ["Firm lump", "Occasional tenderness"],
    dark: ["Darkened bump"],
    vitiligo: ["Visible subcutaneous lump"]
  },
  risks: {
    light: ["Infection"],
    dark: ["Scarring", "Pigmentation"],
    vitiligo: ["Skin irritation"]
  },
  images: {
    light: ["cyst/light1.jpg", "cyst/light2.jpg"],
    dark: ["cyst/dark1.jpg", "cyst/dark2.jpg"],
    vitiligo: ["cyst/vitiligo1.jpg", "cyst/vitiligo2.jpg"]
  }
},

{
  id: "actinic_keratosis",
  name: "Actinic Keratosis (Precancerous Lesion)",
  category: "Precancerous",
  medicalName: "Actinic Keratosis",
  commonName: "Sun Damage Spot",
  audience: {
    consumer: "A rough, scaly patch caused by long-term sun exposure.",
    patient: "You may feel dry or rough spots that don’t heal easily.",
    clinician: "Premalignant keratinocyte dysplasia induced by ultraviolet radiation."
  },
  description: {
    light: "Rough pink or skin-colored patches.",
    dark: "Often darker and harder to detect visually.",
    vitiligo: "Scaly lesions on depigmented skin."
  },
  symptoms: {
    light: ["Rough texture", "Scaling"],
    dark: ["Dark scaly patches"],
    vitiligo: ["Visible scaling"]
  },
  risks: {
    light: ["Squamous cell carcinoma"],
    dark: ["Delayed diagnosis"],
    vitiligo: ["UV sensitivity"]
  },
  images: {
    light: ["ak/light1.jpg", "ak/light2.jpg"],
    dark: ["ak/dark1.jpg", "ak/dark2.jpg"],
    vitiligo: ["ak/vitiligo1.jpg", "ak/vitiligo2.jpg"]
  }
},

{
  id: "perioral_dermatitis",
  name: "Perioral Dermatitis (Facial Rash)",
  category: "Inflammatory",
  medicalName: "Perioral Dermatitis",
  commonName: "Mouth Rash",
  audience: {
    consumer: "A rash of small bumps that forms around the mouth or nose.",
    patient: "You may see clusters of tiny pimples that don’t act like acne.",
    clinician: "Inflammatory facial dermatitis often associated with topical steroid use."
  },
  description: {
    light: "Red bumps around mouth and nose.",
    dark: "May appear brownish with subtle redness.",
    vitiligo: "Rash around mouth on depigmented skin."
  },
  symptoms: {
    light: ["Small red bumps"],
    dark: ["Brown bumps"],
    vitiligo: ["Clustered rash"]
  },
  risks: {
    light: ["Chronic flares"],
    dark: ["Pigmentation changes"],
    vitiligo: ["Skin sensitivity"]
  },
  images: {
    light: ["perioral/light1.jpg", "perioral/light2.jpg"],
    dark: ["perioral/dark1.jpg", "perioral/dark2.jpg"],
    vitiligo: ["perioral/vitiligo1.jpg", "perioral/vitiligo2.jpg"]
  }
}
,
{
  id: "contact_dermatitis",
  name: "Contact Dermatitis (Allergic Skin Reaction)",
  category: "Inflammatory",
  medicalName: "Contact Dermatitis",
  commonName: "Allergic Rash",
  audience: {
    consumer: "A rash caused by touching something that irritates your skin or triggers an allergy.",
    patient: "You may notice itching, redness, or swelling where your skin touched an irritant.",
    clinician: "Inflammatory dermatitis resulting from exposure to allergens or irritants."
  },
  description: {
    light: "Red, itchy rash with possible blistering.",
    dark: "Rash may appear dark, swollen, and itchy.",
    vitiligo: "Inflammation sharply visible on depigmented skin."
  },
  symptoms: {
    light: ["Redness", "Itching"],
    dark: ["Swelling", "Dark patches"],
    vitiligo: ["Sharp rash borders"]
  },
  risks: {
    light: ["Skin infection"],
    dark: ["Post-inflammatory hyperpigmentation"],
    vitiligo: ["Skin sensitivity"]
  },
  images: {
    light: ["contact/light1.jpg", "contact/light2.jpg"],
    dark: ["contact/dark1.jpg", "contact/dark2.jpg"],
    vitiligo: ["contact/vitiligo1.jpg", "contact/vitiligo2.jpg"]
  }
},

{
  id: "dyshidrotic_eczema",
  name: "Dyshidrotic Eczema (Hand and Foot Blisters)",
  category: "Eczema",
  medicalName: "Dyshidrotic Eczema",
  commonName: "Blistering Hand Eczema",
  audience: {
    consumer: "A type of eczema that causes small itchy blisters on hands and feet.",
    patient: "You may have sudden outbreaks of tiny blisters that peel as they heal.",
    clinician: "Vesicular eczema affecting palms and soles."
  },
  description: {
    light: "Clear fluid-filled blisters with redness.",
    dark: "Blisters may be less red but very itchy.",
    vitiligo: "Blisters contrast strongly with depigmented skin."
  },
  symptoms: {
    light: ["Blisters", "Itching"],
    dark: ["Scaling", "Pain"],
    vitiligo: ["Visible vesicles"]
  },
  risks: {
    light: ["Skin cracking"],
    dark: ["Chronic eczema"],
    vitiligo: ["Skin breakdown"]
  },
  images: {
    light: ["dyshidrotic/light1.jpg", "dyshidrotic/light2.jpg"],
    dark: ["dyshidrotic/dark1.jpg", "dyshidrotic/dark2.jpg"],
    vitiligo: ["dyshidrotic/vitiligo1.jpg", "dyshidrotic/vitiligo2.jpg"]
  }
},

{
  id: "tinea_versicolor",
  name: "Tinea Versicolor (Fungal Pigment Disorder)",
  category: "Fungal",
  medicalName: "Pityriasis Versicolor",
  commonName: "Sun Fungus",
  audience: {
    consumer: "A common fungal condition that causes light or dark patches on the skin.",
    patient: "You may notice patches that don’t tan evenly.",
    clinician: "Superficial Malassezia yeast infection affecting pigmentation."
  },
  description: {
    light: "Light or pink patches that don’t tan.",
    dark: "Lightened patches are very noticeable.",
    vitiligo: "May resemble vitiligo but with fine scale."
  },
  symptoms: {
    light: ["Discolored patches"],
    dark: ["Hypopigmented spots"],
    vitiligo: ["Patchy contrast"]
  },
  risks: {
    light: ["Recurrence"],
    dark: ["Misdiagnosis"],
    vitiligo: ["Delayed treatment"]
  },
  images: {
    light: ["tinea/light1.jpg", "tinea/light2.jpg"],
    dark: ["tinea/dark1.jpg", "tinea/dark2.jpg"],
    vitiligo: ["tinea/vitiligo1.jpg", "tinea/vitiligo2.jpg"]
  }
},

{
  id: "urticaria",
  name: "Urticaria (Hives)",
  category: "Allergic",
  medicalName: "Urticaria",
  commonName: "Hives",
  audience: {
    consumer: "Sudden itchy welts that appear and disappear quickly.",
    patient: "You may see raised itchy patches that move around your body.",
    clinician: "Transient wheals caused by histamine release."
  },
  description: {
    light: "Raised red itchy welts.",
    dark: "Swelling may be felt more than seen.",
    vitiligo: "Raised welts on depigmented skin."
  },
  symptoms: {
    light: ["Itching", "Welts"],
    dark: ["Swelling"],
    vitiligo: ["Raised patches"]
  },
  risks: {
    light: ["Chronic hives"],
    dark: ["Under-recognition"],
    vitiligo: ["Skin irritation"]
  },
  images: {
    light: ["hives/light1.jpg", "hives/light2.jpg"],
    dark: ["hives/dark1.jpg", "hives/dark2.jpg"],
    vitiligo: ["hives/vitiligo1.jpg", "hives/vitiligo2.jpg"]
  }
},

{
  id: "molluscum_contagiosum",
  name: "Molluscum Contagiosum (Viral Bumps)",
  category: "Viral",
  medicalName: "Molluscum Contagiosum",
  commonName: "Water Warts",
  audience: {
    consumer: "A viral skin infection causing small dome-shaped bumps.",
    patient: "You may see clusters of smooth bumps with a small dent in the center.",
    clinician: "Poxvirus infection producing umbilicated papules."
  },
  description: {
    light: "Small flesh-colored bumps.",
    dark: "Bumps may appear darker and inflamed.",
    vitiligo: "Distinct bumps on depigmented skin."
  },
  symptoms: {
    light: ["Dome-shaped bumps"],
    dark: ["Inflamed papules"],
    vitiligo: ["Visible clusters"]
  },
  risks: {
    light: ["Spread"],
    dark: ["Scarring"],
    vitiligo: ["Skin trauma"]
  },
  images: {
    light: ["molluscum/light1.jpg", "molluscum/light2.jpg"],
    dark: ["molluscum/dark1.jpg", "molluscum/dark2.jpg"],
    vitiligo: ["molluscum/vitiligo1.jpg", "molluscum/vitiligo2.jpg"]
  }
}
,
      {
  id: "psoriasis_guttate",
  name: "Guttate Psoriasis (Drop-Like Psoriasis)",
  category: "Autoimmune",
  medicalName: "Guttate Psoriasis",
  commonName: "Drop Psoriasis",
  audience: {
    consumer: "A form of psoriasis that causes many small red spots on the skin.",
    patient: "You may notice sudden small spots after a sore throat or illness.",
    clinician: "Acute psoriasis subtype often triggered by streptococcal infection."
  },
  description: {
    light: "Small red scaly drops across the body.",
    dark: "Dark raised spots with scaling.",
    vitiligo: "Scaly spots contrasting sharply on depigmented skin."
  },
  symptoms: {
    light: ["Small red spots", "Scaling"],
    dark: ["Dark scaly papules"],
    vitiligo: ["Sharp contrast lesions"]
  },
  risks: {
    light: ["Chronic psoriasis"],
    dark: ["Hyperpigmentation"],
    vitiligo: ["Autoimmune overlap"]
  },
  images: {
    light: ["guttate/light1.jpg", "guttate/light2.jpg"],
    dark: ["guttate/dark1.jpg", "guttate/dark2.jpg"],
    vitiligo: ["guttate/vitiligo1.jpg", "guttate/vitiligo2.jpg"]
  }
},

{
  id: "lichen_simplex_chronicus",
  name: "Lichen Simplex Chronicus (Thickened Itchy Skin)",
  category: "Inflammatory",
  medicalName: "Lichen Simplex Chronicus",
  commonName: "Chronic Scratch Rash",
  audience: {
    consumer: "Skin thickening caused by repeated scratching or rubbing.",
    patient: "You may notice one or more thick, itchy patches that don’t go away.",
    clinician: "Localized lichenification due to chronic pruritus."
  },
  description: {
    light: "Thickened leathery skin patches.",
    dark: "Darkened, very thick skin plaques.",
    vitiligo: "Textured thick skin on depigmented areas."
  },
  symptoms: {
    light: ["Thick skin", "Intense itching"],
    dark: ["Hyperpigmentation", "Plaques"],
    vitiligo: ["Raised texture"]
  },
  risks: {
    light: ["Skin infection"],
    dark: ["Permanent discoloration"],
    vitiligo: ["Skin breakdown"]
  },
  images: {
    light: ["lsc/light1.jpg", "lsc/light2.jpg"],
    dark: ["lsc/dark1.jpg", "lsc/dark2.jpg"],
    vitiligo: ["lsc/vitiligo1.jpg", "lsc/vitiligo2.jpg"]
  }
},

{
  id: "erythema_multiforme",
  name: "Erythema Multiforme (Target Rash)",
  category: "Hypersensitivity",
  medicalName: "Erythema Multiforme",
  commonName: "Target Rash",
  audience: {
    consumer: "A skin reaction that causes target-shaped spots.",
    patient: "You may notice round lesions with darker centers.",
    clinician: "Acute immune-mediated mucocutaneous reaction."
  },
  description: {
    light: "Target-shaped red lesions.",
    dark: "Darker rings with subtle redness.",
    vitiligo: "Distinct target lesions on depigmented skin."
  },
  symptoms: {
    light: ["Target lesions", "Mild itching"],
    dark: ["Ring-shaped patches"],
    vitiligo: ["Clear lesion borders"]
  },
  risks: {
    light: ["Recurrence"],
    dark: ["Misdiagnosis"],
    vitiligo: ["Skin sensitivity"]
  },
  images: {
    light: ["em/light1.jpg", "em/light2.jpg"],
    dark: ["em/dark1.jpg", "em/dark2.jpg"],
    vitiligo: ["em/vitiligo1.jpg", "em/vitiligo2.jpg"]
  }
},

{
  id: "granuloma_annulare",
  name: "Granuloma Annulare (Ring-Shaped Rash)",
  category: "Inflammatory",
  medicalName: "Granuloma Annulare",
  commonName: "Ring Rash",
  audience: {
    consumer: "A harmless rash that forms rings on the skin.",
    patient: "You may see circular patches that aren’t itchy or painful.",
    clinician: "Benign granulomatous dermatosis of unknown cause."
  },
  description: {
    light: "Skin-colored or pink ring lesions.",
    dark: "Dark raised ring-shaped patches.",
    vitiligo: "Ring lesions visible on depigmented skin."
  },
  symptoms: {
    light: ["Ring shapes", "No pain"],
    dark: ["Firm rings"],
    vitiligo: ["Clear rings"]
  },
  risks: {
    light: ["Cosmetic concern"],
    dark: ["Persistent lesions"],
    vitiligo: ["Misidentification"]
  },
  images: {
    light: ["ga/light1.jpg", "ga/light2.jpg"],
    dark: ["ga/dark1.jpg", "ga/dark2.jpg"],
    vitiligo: ["ga/vitiligo1.jpg", "ga/vitiligo2.jpg"]
  }
},

{
  id: "pilonidal_disease",
  name: "Pilonidal Disease (Tailbone Cyst)",
  category: "Cysts",
  medicalName: "Pilonidal Disease",
  commonName: "Tailbone Cyst",
  audience: {
    consumer: "A painful cyst near the tailbone that can drain.",
    patient: "You may feel pain when sitting and notice drainage.",
    clinician: "Chronic sinus tract disease of the sacrococcygeal region."
  },
  description: {
    light: "Painful swelling near tailbone.",
    dark: "Inflamed area with scarring.",
    vitiligo: "Visible swelling on depigmented skin."
  },
  symptoms: {
    light: ["Pain", "Drainage"],
    dark: ["Scarring", "Tenderness"],
    vitiligo: ["Localized swelling"]
  },
  risks: {
    light: ["Recurrent infection"],
    dark: ["Chronic disease"],
    vitiligo: ["Skin irritation"]
  },
  images: {
    light: ["pilonidal/light1.jpg", "pilonidal/light2.jpg"],
    dark: ["pilonidal/dark1.jpg", "pilonidal/dark2.jpg"],
    vitiligo: ["pilonidal/vitiligo1.jpg", "pilonidal/vitiligo2.jpg"]
  }
}
,
      {
  id: "rosacea_phymatous",
  name: "Phymatous Rosacea (Thickened Rosacea)",
  category: "Inflammatory",
  medicalName: "Phymatous Rosacea",
  commonName: "Bulbous Nose Rosacea",
  audience: {
    consumer: "A form of rosacea that causes thick, bumpy skin, most often on the nose.",
    patient: "You may notice skin thickening and enlarged pores over time.",
    clinician: "Chronic rosacea subtype with sebaceous gland hypertrophy."
  },
  description: {
    light: "Thickened uneven skin, usually on the nose.",
    dark: "Skin thickening with subtle redness.",
    vitiligo: "Textural changes visible on depigmented skin."
  },
  symptoms: {
    light: ["Skin thickening", "Enlarged pores"],
    dark: ["Bumpy texture"],
    vitiligo: ["Uneven surface"]
  },
  risks: {
    light: ["Permanent skin changes"],
    dark: ["Delayed diagnosis"],
    vitiligo: ["Skin sensitivity"]
  },
  images: {
    light: ["phymatous/light1.jpg", "phymatous/light2.jpg"],
    dark: ["phymatous/dark1.jpg", "phymatous/dark2.jpg"],
    vitiligo: ["phymatous/vitiligo1.jpg", "phymatous/vitiligo2.jpg"]
  }
},

{
  id: "erythrasma",
  name: "Erythrasma (Bacterial Fold Rash)",
  category: "Infectious",
  medicalName: "Erythrasma",
  commonName: "Skin Fold Infection",
  audience: {
    consumer: "A bacterial infection that affects skin folds and causes discoloration.",
    patient: "You may notice brown or reddish patches in warm, moist areas.",
    clinician: "Corynebacterium minutissimum infection fluorescing under Wood’s lamp."
  },
  description: {
    light: "Red-brown patches in skin folds.",
    dark: "Dark brown patches that may be mistaken for fungus.",
    vitiligo: "Sharp discoloration in folds of depigmented skin."
  },
  symptoms: {
    light: ["Discoloration", "Mild itching"],
    dark: ["Dark patches"],
    vitiligo: ["Clear patch borders"]
  },
  risks: {
    light: ["Recurrence"],
    dark: ["Misdiagnosis"],
    vitiligo: ["Skin irritation"]
  },
  images: {
    light: ["erythrasma/light1.jpg", "erythrasma/light2.jpg"],
    dark: ["erythrasma/dark1.jpg", "erythrasma/dark2.jpg"],
    vitiligo: ["erythrasma/vitiligo1.jpg", "erythrasma/vitiligo2.jpg"]
  }
},

{
  id: "necrobiosis_lipoidica",
  name: "Necrobiosis Lipoidica (Shin Plaques)",
  category: "Inflammatory",
  medicalName: "Necrobiosis Lipoidica",
  commonName: "Diabetic Shin Rash",
  audience: {
    consumer: "A rare condition causing shiny patches on the lower legs.",
    patient: "You may see yellow-brown areas that slowly grow larger.",
    clinician: "Granulomatous dermatosis associated with diabetes mellitus."
  },
  description: {
    light: "Yellowish shiny plaques with red borders.",
    dark: "Darkened plaques with thinning skin.",
    vitiligo: "Plaques stand out sharply on depigmented skin."
  },
  symptoms: {
    light: ["Shiny plaques", "Thin skin"],
    dark: ["Hyperpigmented patches"],
    vitiligo: ["Visible plaques"]
  },
  risks: {
    light: ["Ulceration"],
    dark: ["Scarring"],
    vitiligo: ["Skin breakdown"]
  },
  images: {
    light: ["nl/light1.jpg", "nl/light2.jpg"],
    dark: ["nl/dark1.jpg", "nl/dark2.jpg"],
    vitiligo: ["nl/vitiligo1.jpg", "nl/vitiligo2.jpg"]
  }
},

{
  id: "papular_urticaria",
  name: "Papular Urticaria (Insect Bite Reaction)",
  category: "Hypersensitivity",
  medicalName: "Papular Urticaria",
  commonName: "Bug Bite Allergy",
  audience: {
    consumer: "An allergic reaction to insect bites causing itchy bumps.",
    patient: "You may get repeated itchy bumps, especially on exposed skin.",
    clinician: "Hypersensitivity reaction to arthropod bites."
  },
  description: {
    light: "Red itchy bumps in clusters.",
    dark: "Firm dark bumps with intense itching.",
    vitiligo: "Raised bumps on depigmented skin."
  },
  symptoms: {
    light: ["Itching", "Clusters"],
    dark: ["Firm papules"],
    vitiligo: ["Visible bumps"]
  },
  risks: {
    light: ["Skin infection"],
    dark: ["Scarring", "Pigmentation"],
    vitiligo: ["Skin trauma"]
  },
  images: {
    light: ["papular/light1.jpg", "papular/light2.jpg"],
    dark: ["papular/dark1.jpg", "papular/dark2.jpg"],
    vitiligo: ["papular/vitiligo1.jpg", "papular/vitiligo2.jpg"]
  }
},

{
  id: "cutaneous_horns",
  name: "Cutaneous Horn (Keratin Growth)",
  category: "Growths",
  medicalName: "Cutaneous Horn",
  commonName: "Horn-Like Skin Growth",
  audience: {
    consumer: "A hard growth on the skin made of excess keratin.",
    patient: "You may notice a cone-shaped growth that keeps growing.",
    clinician: "Hyperkeratotic projection that may overlie benign or malignant lesions."
  },
  description: {
    light: "Yellowish horn-like projection.",
    dark: "Dark hardened protrusion.",
    vitiligo: "Horn-like growth visible on depigmented skin."
  },
  symptoms: {
    light: ["Hard growth"],
    dark: ["Thickened projection"],
    vitiligo: ["Visible keratin cone"]
  },
  risks: {
    light: ["Underlying cancer"],
    dark: ["Delayed evaluation"],
    vitiligo: ["Skin trauma"]
  },
  images: {
    light: ["horn/light1.jpg", "horn/light2.jpg"],
    dark: ["horn/dark1.jpg", "horn/dark2.jpg"],
    vitiligo: ["horn/vitiligo1.jpg", "horn/vitiligo2.jpg"]
  }
}
,
{
  id: "seborrheic_keratosis",
  name: "Seborrheic Keratosis (Benign Skin Growth)",
  category: "Growths",
  medicalName: "Seborrheic Keratosis",
  commonName: "Age Spots (Benign)",
  audience: {
    consumer: "A harmless skin growth that often looks stuck onto the skin.",
    patient: "You may notice rough or waxy brown or black spots that grow slowly.",
    clinician: "Benign epidermal tumor composed of keratinocytes."
  },
  description: {
    light: "Waxy brown or tan raised spots.",
    dark: "Dark raised growths often mistaken for moles.",
    vitiligo: "Raised pigmented growths on depigmented skin."
  },
  symptoms: {
    light: ["Waxy texture", "Raised lesion"],
    dark: ["Dark growths"],
    vitiligo: ["Sharp contrast"]
  },
  risks: {
    light: ["Cosmetic concern"],
    dark: ["Misdiagnosis"],
    vitiligo: ["Skin irritation"]
  },
  images: {
    light: ["sk/light1.jpg", "sk/light2.jpg"],
    dark: ["sk/dark1.jpg", "sk/dark2.jpg"],
    vitiligo: ["sk/vitiligo1.jpg", "sk/vitiligo2.jpg"]
  }
},

{
  id: "melasma",
  name: "Melasma (Hormonal Pigmentation)",
  category: "Pigment",
  medicalName: "Melasma",
  commonName: "Pregnancy Mask",
  audience: {
    consumer: "A common condition causing dark patches on the face.",
    patient: "You may see symmetrical dark areas that worsen with sun exposure.",
    clinician: "Acquired hypermelanosis often triggered by hormones and UV exposure."
  },
  description: {
    light: "Brown patches on cheeks and forehead.",
    dark: "Darkened facial patches with blurred borders.",
    vitiligo: "Hyperpigmented areas near depigmented skin."
  },
  symptoms: {
    light: ["Dark patches"],
    dark: ["Facial hyperpigmentation"],
    vitiligo: ["Uneven tone"]
  },
  risks: {
    light: ["Chronic recurrence"],
    dark: ["Psychological distress"],
    vitiligo: ["Contrast exaggeration"]
  },
  images: {
    light: ["melasma/light1.jpg", "melasma/light2.jpg"],
    dark: ["melasma/dark1.jpg", "melasma/dark2.jpg"],
    vitiligo: ["melasma/vitiligo1.jpg", "melasma/vitiligo2.jpg"]
  }
},

{
  id: "angiokeratoma",
  name: "Angiokeratoma (Vascular Skin Lesions)",
  category: "Vascular",
  medicalName: "Angiokeratoma",
  commonName: "Blood Vessel Spots",
  audience: {
    consumer: "Small dark red or purple bumps caused by blood vessels.",
    patient: "You may notice tiny rough spots that can bleed if irritated.",
    clinician: "Capillary dilation with epidermal hyperkeratosis."
  },
  description: {
    light: "Dark red to purple raised spots.",
    dark: "Very dark raised vascular lesions.",
    vitiligo: "Purple lesions highly visible on depigmented skin."
  },
  symptoms: {
    light: ["Rough bumps"],
    dark: ["Dark papules"],
    vitiligo: ["Visible vascular spots"]
  },
  risks: {
    light: ["Bleeding"],
    dark: ["Misdiagnosis"],
    vitiligo: ["Skin trauma"]
  },
  images: {
    light: ["angio/light1.jpg", "angio/light2.jpg"],
    dark: ["angio/dark1.jpg", "angio/dark2.jpg"],
    vitiligo: ["angio/vitiligo1.jpg", "angio/vitiligo2.jpg"]
  }
},

{
  id: "erythema_nodosum",
  name: "Erythema Nodosum (Tender Leg Nodules)",
  category: "Inflammatory",
  medicalName: "Erythema Nodosum",
  commonName: "Painful Leg Lumps",
  audience: {
    consumer: "Painful red lumps that usually appear on the shins.",
    patient: "You may feel sore, tender bumps that bruise as they heal.",
    clinician: "Panniculitis associated with systemic inflammatory conditions."
  },
  description: {
    light: "Red tender nodules on shins.",
    dark: "Deep painful nodules with subtle redness.",
    vitiligo: "Tender nodules on depigmented skin."
  },
  symptoms: {
    light: ["Pain", "Swelling"],
    dark: ["Deep nodules"],
    vitiligo: ["Localized tenderness"]
  },
  risks: {
    light: ["Underlying illness"],
    dark: ["Delayed diagnosis"],
    vitiligo: ["Skin sensitivity"]
  },
  images: {
    light: ["en/light1.jpg", "en/light2.jpg"],
    dark: ["en/dark1.jpg", "en/dark2.jpg"],
    vitiligo: ["en/vitiligo1.jpg", "en/vitiligo2.jpg"]
  }
},

{
  id: "xerosis_cutis",
  name: "Xerosis Cutis (Severely Dry Skin)",
  category: "Dry Skin",
  medicalName: "Xerosis Cutis",
  commonName: "Severe Dry Skin",
  audience: {
    consumer: "Extremely dry skin that may crack or itch.",
    patient: "You may feel tight, flaky, or itchy skin, especially in winter.",
    clinician: "Abnormal dryness of the skin due to barrier dysfunction."
  },
  description: {
    light: "Flaky, rough, pale skin.",
    dark: "Ashy appearance with fine scaling.",
    vitiligo: "Dry scaling visible on depigmented areas."
  },
  symptoms: {
    light: ["Flaking", "Itching"],
    dark: ["Ashy skin"],
    vitiligo: ["Scaling"]
  },
  risks: {
    light: ["Cracking"],
    dark: ["Eczema development"],
    vitiligo: ["Skin irritation"]
  },
  images: {
    light: ["xerosis/light1.jpg", "xerosis/light2.jpg"],
    dark: ["xerosis/dark1.jpg", "xerosis/dark2.jpg"],
    vitiligo: ["xerosis/vitiligo1.jpg", "xerosis/vitiligo2.jpg"]
  }
}
,
      
