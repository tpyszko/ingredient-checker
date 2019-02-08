export const ocr_response_format = text => {
  let ingredients_array = text
    .replace(/\n|\r/g, "")
    .toUpperCase()
    .split(",")
    .map(el => el.trim());
  return ingredients_array;
};
