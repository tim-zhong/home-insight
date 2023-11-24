export type State =
  | "IDLE"
  | "READY_TO_UPLOAD"
  | "UPLOADING"
  | "UPLOADED"
  | "ERROR";

export const MOCK_DATA = {
  info: [
    { category: "Address", details: "32495 Jean Dr, Union City, CA 94587" },
    { category: "Type", details: "Duplex/Triplex/Fourplex" },
    {
      category: "Upgrades",
      details:
        "- Year of Upgrade: 2023<br>- What's Been Done: New kitchen, appliances, water heater, furnace, bathrooms, doors, paint (interior and exterior), popcorn ceiling removal, recess lighting, light fixtures, front and garage screen door repaint, laundry room refresh<br>- Does It Have a Permit: Not specified",
    },
    {
      category: "Property Tax",
      details:
        "- 1st Installment: $1577.69 due on or before December 10, 2023<br>- 2nd Installment: $1577.69 due on or before April 10, 2024",
    },
    { category: "House Size", details: "Not provided" },
    { category: "Lot Size", details: "Not provided" },
    { category: "Bedrooms", details: "3" },
    { category: "Bathroom", details: "3 (including a 0.5 bath downstairs)" },
    {
      category: "Notable Observations",
      details:
        "- Driveway: Cracks on the floor<br>- Front Yard: Cracks on the floor<br>- Backyard: Cracks on the floor",
    },
    {
      category: "Natural Hazards",
      details:
        "Not in a Special Flood Hazard Area<br>- In an area of potential dam inundation <br>-Not in a very high fire hazard severity zone<br>- Not in a wildland-state responsibility area<br>- Not in an earthquake fault zone<br>- In an area of potential liquefaction",
    },
    {
      category: "Other Determinations",
      details:
        "- Within 2000 feet of a gas transmission or hazardous liquid pipeline<br>- Not subject to Mello-Roos Districts, 1915 Bond Act Districts, or PACE Contract <br>- Subject to other direct assessments<br>- Not subject to the State Responsibility Area Fire Prevention Fee until 2031",
    },
  ],
  issues: [
    {
      area: "Grade",
      issue: "Improper sloping",
      recommendation: "Correct grading for positive water flow",
      estimatedCost: "$500 - $2,000",
      reportType: "Property Inspection",
    },
    {
      area: "Exterior Stucco Walls",
      issue: "Missing stucco under sliding door",
      recommendation: "Repair stucco",
      estimatedCost: "$300 - $800",
      reportType: "Property Inspection",
    },
    {
      area: "Exterior Trim",
      issue: "Moisture damage",
      recommendation: "Repair trim",
      estimatedCost: "$200 - $600",
      reportType: "Termite Inspection",
    },
    {
      area: "Garage",
      issue: "Door-to-house not self-closing",
      recommendation: "Install self-closing hardware",
      estimatedCost: "$50 - $150",
      reportType: "Property Inspection",
    },
    {
      area: "Chimney",
      issue: "Cracked mortar at top",
      recommendation: "Repair chimney mortar",
      estimatedCost: "$400 - $1,000",
      reportType: "Property Inspection",
    },
  ],
};
