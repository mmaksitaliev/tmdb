import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

describe("<Navbar/>", () => {
  test("renders empty navbar", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find("ul").children()).toHaveLength(0);
  });

  test("renders given links", () => {
    const links = [{ path: "/home", label: "Home" }, { path: "/popular", label: "Popular" }];
    const wrapper = shallow(<Navbar links={links} />);
    const ul = wrapper.find("ul");
    expect(ul.children()).toHaveLength(links.length);

    const navs = ul.find(NavLink);
    expect(navs).toHaveLength(links.length);
  });

  test("renders links with correct label and path ", () => {
    const links = [{ path: "/home", label: "Home" }, { path: "/popular", label: "Popular" }];
    const wrapper = shallow(<Navbar links={links} />);
    const navs = wrapper.find(NavLink);

    expect(navs.get(0).props.to).toBe(links[0].path);
    expect(navs.get(1).props.to).toBe(links[1].path);

    expect(navs.get(0).props.children).toBe(links[0].label);
    expect(navs.get(1).props.children).toBe(links[1].label);
  });
});
