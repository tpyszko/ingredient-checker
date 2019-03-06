import React from "react";
import { shallow, mount } from "enzyme";
import Hero from "./";
import "jest-enzyme";
import "jest-styled-components";

describe("Hero tests", () => {
  it("Hero - render Hero div", () => {
    const wrapper = mount(<Hero />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
  it("Hero - default props", () => {
    const wrapper = mount(<Hero />);
    expect(wrapper.prop("padding")).toEqual("0");
    expect(wrapper.prop("margin")).toEqual("0");
    expect(wrapper.prop("border")).toEqual("none");
    expect(wrapper.prop("minWidth")).toEqual("100%");
  });
});
