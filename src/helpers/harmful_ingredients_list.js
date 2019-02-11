export const harmful_ingredients_list = [
  "SODIUM LAURYL SULFATE",
  "SLS",
  "SODIUM LAURETH SULFATE",
  "SLES",
  "PROPYLENE GLYCOL",
  "DIETANOLOAMINA",
  "DEA",
  "MONOETANOLOAMINA",
  "MEA",
  "TRIETHANOLMINE",
  "TEA",
  "POLYETHYLENE GLYCOL",
  "PEG",
  "POLYPROPYLENE GLYCOL",
  "PPG"
];

export const find_harmful_ingredients = list => {
  let find_intersection = list.filter(item =>
    harmful_ingredients_list.includes(item)
  );
  if (find_intersection.length > 0) {
    return find_intersection;
  }
  return ["We could not find any harmful ingredients"];
};
