import React from "react";
import { mount } from "enzyme";

import Header from "./Header";
import Search from "./Search";
import User from "./User";

describe("<Header/>", () => {
  test("should render without crash", () => {
    const wrapper = mount(<Header />);

    expect(wrapper.contains(Search)).toBeTruthy();
    expect(wrapper.contains(User)).toBeTruthy();
  });

  test("shoid handle clicks", () => {
    const onSearchClick = jest.fn();
    const wrapper = mount(<Header onSearchClick={onSearchClick} />);

    wrapper.find("button").simulate("click", "some argument");
    expect(onSearchClick).toHaveBeenCalledWith("some argument");
  });
});
