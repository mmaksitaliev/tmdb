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

    navs.forEach((nav, i) => {
      expect(nav.prop("to")).toBe(links[i].path);
      expect(nav.prop("children")).toBe(links[i].label);
    });
  });
});
