export type State =
  | "IDLE"
  | "READY_TO_UPLOAD"
  | "UPLOADING"
  | "UPLOADED"
  | "ERROR";

export const MOCK_DATA = {
  details: {
    house_address: "123 Oak Street, Springfield, IL",
    property_tax: 4500.0,
    house_size: "2000 sq ft",
    lot_size: "0.5 acres",
    bedroom_numbers: 4,
    bathroom_numbers: 3,
    upgrades: [
      {
        year_of_upgrade: 2018,
        what_was_done: "Kitchen Remodel",
        does_it_has_permit: true,
      },
      {
        year_of_upgrade: 2020,
        what_was_done: "Roof Replacement",
        does_it_has_permit: true,
      },
      {
        year_of_upgrade: 2022,
        what_was_done: "New HVAC System",
        does_it_has_permit: false,
      },
    ],
  },
  majorConcerns: [
    {
      area_section: "Foundation",
      issue: "Foundation Cracks",
      recommendation: "Repair to prevent further damage",
      estimated_cost: "1000-2000",
      report_type_and_page: "Property inspection",
    },
    {
      area_section: "Front and back roof edge",
      issue: "moisture damage",
      recommendation:
        "Cutting out sections of damaged material and replacing them",
      estimated_cost: "200-500",
      report_type_and_page: "Property inspection",
    },
    {
      area_section: "Exterior",
      issue: "Termite infection",
      recommendation: "Fumigate the entire structure",
      estimated_cost: "2500-4500",
      report_type_and_page: "Termite inspection",
    },
    {
      area_section: "Crawl space",
      issue: "Fungus infection",
      recommendation:
        "Scrape away surface fungus and treat the area with Timbor",
      estimated_cost: "500-800",
      report_type_and_page: "Termite inspection",
    },
    {
      area_section: "Environmental",
      issue: "Leaking Underground Storage Tanks in 1 mile",
      recommendation: null,
      estimated_cost: null,
      report_type_and_page: "NHD Report",
    },
    {
      area_section: "Environmental",
      issue: "Liquefaction Zone",
      recommendation: null,
      estimated_cost: null,
      report_type_and_page: "NHD Report",
    },
    {
      area_section: "Outside",
      issue: "Public Utility Easement",
      recommendation: null,
      estimated_cost: null,
      report_type_and_page: "Easement Map",
    },
    {
      area_section: "Outside",
      issue: "Neighborhood noise",
      recommendation: null,
      estimated_cost: null,
      report_type_and_page: "TDS",
    },
  ],
};
