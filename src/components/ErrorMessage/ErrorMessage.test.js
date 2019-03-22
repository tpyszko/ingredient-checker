import React from "react";
import { shallow, mount } from "enzyme";
import ErrorMessage from "./";
import "jest-enzyme";
import "jest-styled-components";

describe("ErrorMessage tests", () => {
  it("do not render when there is no message", () => {
    const wrapper = shallow(<ErrorMessage />);
    // console.log("ErrorMessage props test", wrapper.debug());
    expect(wrapper.find("p")).toHaveLength(0);
  });
  it("check error message", () => {
    const error = ["Error test1", "Error test2"];
    const wrapper = mount(<ErrorMessage error={error} />);
    expect(wrapper.find("p")).toHaveLength(error.length);
    const texts = wrapper.find("p").map(node => node.text());
    expect(texts).toEqual(error);
  });
});
