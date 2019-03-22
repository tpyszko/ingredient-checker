import React from "react";
import { shallow, mount } from "enzyme";
import IngredientList from "./";
import "jest-enzyme";
import "jest-styled-components";

describe("IngredientList tests", () => {
  it("do not render when there is no list", () => {
    const harmful_ingredients = [];
    const theme = { color: { dark: "blue" } };
    const wrapper = shallow(
      <IngredientList
        theme={theme}
        label="test label"
        harmful_ingredients={harmful_ingredients}
      />,
      theme
    );
    expect(wrapper.find("Text")).toHaveLength(2);
    const texts = wrapper.find("Text").map(node => node.text());
    expect(texts).toEqual([`test label `, "No label has sent"]);
  });
  it("render harmful ingredients list", () => {
    const harmful_ingredients = ["ingredient test 1", "ingredient test 2"];
    const theme = { color: { dark: "blue" } };
    const wrapper = shallow(
      <IngredientList
        theme={theme}
        label="test label"
        harmful_ingredients={harmful_ingredients}
      />,
      theme
    );
    expect(wrapper.find("Text")).toHaveLength(harmful_ingredients.length + 1);
    const texts = wrapper.find("Text").map(node => node.text());
    expect(texts).toEqual([
      "test label ",
      "ingredient test 1",
      "ingredient test 2"
    ]);
  });
});
