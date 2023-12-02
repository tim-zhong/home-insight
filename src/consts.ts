export type State =
  | "IDLE"
  | "READY_TO_UPLOAD"
  | "UPLOADING"
  | "UPLOADED"
  | "ERROR";

type BasicInfo = {
  house_address: string;
  property_tax: string;
  house_size: string;
  lot_size: string;
  bedroom_numbers: number;
  bathroom_numbers: number;
  upgrades: {
    year_of_upgrade: string;
    what_was_done: string;
    does_it_has_permit: string;
  }[];
};

type MajorConcern = {
  area_section: string;
  issue: string;
  recommendation: string;
  estimated_cost: string;
  report_type_and_page: string;
};
export const MOCK_DATA: {
  details: BasicInfo;
  majorConcerns: MajorConcern[];
} = {
  details: {
    house_address: "1131 Foothill Street Redwood City CA 94061",
    property_tax: "4500.0",
    house_size: "1460 sq ft",
    lot_size: "7100 sq ft",
    bedroom_numbers: 4,
    bathroom_numbers: 2,
    upgrades: [],
  },
  majorConcerns: [
    {
      area_section: "Exterior",
      issue: "Damaged dryer vent",
      recommendation:
        "Repair or replace as needed for proper operation and to prevent leaking",
      estimated_cost: "100-300",
      report_type_and_page: "Home Inspection Report page 16",
    },
    {
      area_section: "Exterior",
      issue: "Wood damage and earth-to-wood contact",
      recommendation:
        "Consult a licensed pest control specialist for evaluation and correction",
      estimated_cost: "300-600",
      report_type_and_page: "Home Inspection Report page 16",
    },
    {
      area_section: "Electrical",
      issue:
        "Knob-and-tube wiring, unprotected wires, ungrounded outlets, damaged outlet",
      recommendation:
        "Consult a licensed electrical contractor for correction and safety improvements",
      estimated_cost: "1500-3000",
      report_type_and_page: "Home Inspection Report page 16",
    },
    {
      area_section: "Heating and Cooling",
      issue:
        "No visible sediment trap at furnace gas line, unsecured A/C compressor",
      recommendation:
        "Consult a licensed heating contractor for correction and safety improvements",
      estimated_cost: "200-500",
      report_type_and_page: "Home Inspection Report page 16",
    },
    {
      area_section: "Plumbing",
      issue:
        "Improperly installed TP valve drain, no sediment trap for water heater gas line",
      recommendation: "Consult a licensed plumbing contractor for correction",
      estimated_cost: "150-350",
      report_type_and_page: "Home Inspection Report page 16",
    },
    {
      area_section: "Kitchen",
      issue: "Malfunctioning vent fan, loose sink faucet, sticking pocket door",
      recommendation: "Correct for proper operation and safety",
      estimated_cost: "200-500",
      report_type_and_page: "Home Inspection Report page 16",
    },
    {
      area_section: "Bathrooms",
      issue:
        "Leaks at shower heads and tub valve, grout voids, improperly installed shower head",
      recommendation: "Repair leaks, grout, and shower head installation",
      estimated_cost: "300-700",
      report_type_and_page: "Home Inspection Report page 16",
    },
    {
      area_section: "Interior",
      issue:
        "Sloping floors, unidentified hot spots in ceiling, dryer lint accumulation",
      recommendation:
        "Evaluate and correct as needed, especially for fire safety",
      estimated_cost: "500-2000",
      report_type_and_page: "Home Inspection Report page 16",
    },
    {
      area_section: "Foundation and Framing",
      issue:
        "Cracks in garage floor, previous moisture penetration, efflorescence",
      recommendation:
        "Monitor and correct as needed, consult a pest control specialist",
      estimated_cost: "300-1000",
      report_type_and_page: "Home Inspection Report page 16",
    },
    {
      area_section: "Substructure",
      issue: "Subterranean Termite Infestation",
      recommendation:
        "Remove evidence of termites and chemically treat the perimeter of the structure with Termidor",
      estimated_cost: "1780-2240",
      report_type_and_page: "Pest Inspection Report, page 3",
    },
    {
      area_section: "Substructure",
      issue: "Drywood Termites",
      recommendation:
        "Fumigate entire structure with lethal gases (Drexel Master Fume or Douglas Vikane)",
      estimated_cost: "10375",
      report_type_and_page: "Pest Inspection Report, page 3",
    },
    {
      area_section: "Hall Bath Floor",
      issue: "Fungus Damage to Subflooring",
      recommendation:
        "Remove toilet, vanity, sink top, and ceramic tile floor. Replace damaged subflooring and reinstall original fixtures",
      estimated_cost: "3690",
      report_type_and_page: "Pest Inspection Report, page 3",
    },
    {
      area_section: "Substructure Soil",
      issue: "Fungus Infected and Termite Infested Scrap Wood",
      recommendation:
        "Remove and dispose of all scrap wood and cellulose debris",
      estimated_cost: "295",
      report_type_and_page: "Pest Inspection Report, page 3",
    },
    {
      area_section: "Exterior",
      issue:
        "Drywood Termite and Subterranean Termite Damage to Door Jamb and Trim",
      recommendation:
        "Remove, repair, or replace as needed, including the use of a wood filler, and prime paint areas disturbed",
      estimated_cost: "310",
      report_type_and_page: "Pest Inspection Report, page 5",
    },
    {
      area_section: "Right Side Overhang",
      issue:
        "Subterranean Termite and Fungus Damage to Base of Support Posts and Pads",
      recommendation:
        "Remove, repair, or replace as needed, and prime paint areas disturbed",
      estimated_cost: "560",
      report_type_and_page: "Pest Inspection Report, page 5",
    },
    {
      area_section: "Exterior Wood Shingles and Water Table Trim",
      issue: "Subterranean Termite and Fungus Damage",
      recommendation:
        "Remove, repair, or replace as needed to match as close as possible, and prime paint areas disturbed",
      estimated_cost: "1290",
      report_type_and_page: "Pest Inspection Report, page 5",
    },
    {
      area_section: "Exterior Trim at Meter Box",
      issue: "Fungus Damage",
      recommendation:
        "Remove, repair, or replace as needed, and prime paint areas disturbed",
      estimated_cost: "210",
      report_type_and_page: "Pest Inspection Report, page 5",
    },
    {
      area_section: "Foundation",
      issue: "Foundation settlement",
      recommendation:
        "Engage a qualified geotechnical firm for soil analysis and a structural engineer for foundation repair design. Excavate piers under the perimeter foundation into supportive material, pour reinforced concrete for support, and install a drainage system in the crawlspace.",
      estimated_cost: "171000",
      report_type_and_page: "Summary Report of Foundation",
    },
    {
      area_section: "Foundation",
      issue: "Foundation Cracks",
      recommendation:
        "Engage a structural engineer for a detailed assessment and repair work",
      estimated_cost: "2000-3000",
      report_type_and_page: "Foundation Report",
    },
    {
      area_section: "Deck",
      issue: "Backyard concrete piers supporting the deck are only 3 feet deep",
      recommendation:
        "Reinforce or rebuild piers to appropriate depth for stability",
      estimated_cost: "1500-2500",
      report_type_and_page: "Addendum No #2 RE Concrete Piers",
    },
    {
      area_section: "Gas Fireplace",
      issue: "Gas fireplace non-functional",
      recommendation:
        "Repair or replace the gas fireplace to ensure functionality",
      estimated_cost: "1000-2000",
      report_type_and_page: "Addendum #1 RE Hot Tub and Gas Fireplace",
    },
    {
      area_section: "Hot Tub",
      issue: "Hot tub not operational",
      recommendation: "Repair or replace the hot tub to restore functionality",
      estimated_cost: "1500-3000",
      report_type_and_page: "Addendum #1 RE Hot Tub and Gas Fireplace",
    },
  ],
};
