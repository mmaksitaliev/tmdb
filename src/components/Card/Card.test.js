import React from "react";
import { shallow } from "enzyme";

import Card from "./Card";

describe("<Card/>", () => {
  test("should render without crash", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toBeTruthy();
  });

  test("should render the given child", () => {
    const child = "Card body";
    const wrapper = shallow(<Card>{child}</Card>);

    expect(wrapper.contains(child)).toBeTruthy();
  });
});
