import React from "react";
import { shallow } from "enzyme";
import IconButton from "./IconButton";

describe("<IconButton/>", () => {
  test("should render without crash", () => {
    const wrapper = shallow(<IconButton />);

    expect(wrapper).toBeTruthy();
  });

  test("should render passed children string", () => {
    const children = "Click me!";
    const wrapper = shallow(<IconButton children={children} />);

    expect(wrapper.text()).toBe(children);
  });

  test("should render passed children component", () => {
    const children = <i className="fa fa-tick" />;
    const wrapper = shallow(<IconButton children={children} />);

    expect(wrapper.contains(children)).toBeTruthy();
  });
});
