import React from "react";
import { shallow, mount } from "enzyme";
import Flex from "./";
import "jest-enzyme";
import "jest-styled-components";

describe("Flex tests", () => {
  it("Flex - render flex div", () => {
    const wrapper = mount(<Flex />);
    // console.log("Flex props test", wrapper.debug());
    expect(wrapper.find("div")).toHaveLength(1);
  });
  it("Flex - default props", () => {
    const wrapper = mount(<Flex />);
    expect(wrapper.prop("display")).toEqual("flex");
    expect(wrapper.prop("alignItems")).toEqual("center");
    expect(wrapper.prop("justifyContent")).toEqual("center");
    expect(wrapper.prop("flexDirection")).toEqual("row");
    expect(wrapper.prop("flexWrap")).toEqual("no-wrap");
    expect(wrapper.prop("minHeight")).toEqual("inherit");
  });
});
