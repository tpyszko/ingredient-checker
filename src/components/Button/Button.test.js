import React from "react";
import { shallow, mount } from "enzyme";
import Button from "./";

describe("Button default.props tests", () => {
  it("check default props", () => {
    const wrapper = shallow(<Button />);
    console.log("Button props test", wrapper.debug());
    expect(wrapper.prop("nature")).toEqual("default");
    expect(wrapper.prop("disabled")).toEqual(false);
    expect(wrapper.prop("fluid")).toEqual(false);
    expect(wrapper.text()).toEqual("button text");
  });
  it("mocking onClick event", () => {
    const mockFunction = jest.fn();
    const component = shallow(<Button onClick={mockFunction} />);
    expect(mockFunction).not.toHaveBeenCalled();
    component.simulate("click");
    expect(mockFunction).toHaveBeenCalled();
  });
});
