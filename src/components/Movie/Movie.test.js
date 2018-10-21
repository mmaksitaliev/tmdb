import React from "react";
import { shallow } from "enzyme";
import Movie from "./Movie";

describe("<Movie/>", () => {
  test("renders without crashing when no props passed", () => {
    const wrapper = shallow(<Movie />);
    expect(wrapper.hasClass("movie")).toBeTruthy();

    expect(wrapper.find(".movie__details")).toBeTruthy();
    expect(wrapper.find(".movie__title")).toBeTruthy();
    expect(wrapper.find(".movie__year")).toBeTruthy();
    expect(wrapper.find(".movie__image")).toBeTruthy();
  });

  test("should render Movie with given props", () => {
    const movie = { title: "Fight club", year: "1999", image: "image_url" };
    const wrapper = shallow(<Movie {...movie} />);

    expect(wrapper.find("h4.movie__title").text()).toBe(movie.title);
    expect(wrapper.find("h4.movie__year").text()).toBe(movie.year);
  });
});
