import React from "react";
import { mount } from "enzyme";
import ImagePreview from "./";
import "jest-enzyme";
import "jest-styled-components";

describe("ImagePreview tests", () => {
  it("do not render when there is no image", () => {
    const wrapper = mount(<ImagePreview />);
    expect(wrapper.find("img")).toHaveLength(0);
  });
  it("render when there is an image", () => {
    const image = "test.image.base.64";
    const wrapper = mount(<ImagePreview src={image} />);
    expect(wrapper.find("img")).toHaveLength(1);
  });
});
