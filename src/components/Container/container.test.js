import React from "react";
import { shallow } from "enzyme";
import Container from "./";

describe("Container tests", () => {
  it("check default props", () => {
    const wrapper = shallow(<Container />);
    console.log("Container props test", wrapper.debug());
    expect(wrapper.prop("padding")).toEqual("1em");
    expect(wrapper.prop("border")).toEqual("none");
  });
});
