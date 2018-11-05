import React from "react";
import { shallow } from "enzyme";
import AnimeList from "../../components/AnimeList";

describe("Anime list", () => {
  it("should not render a list if prop is an empty array", () => {
    const mockData = [];
    const wrapper = shallow(<AnimeList data={mockData} />);
    expect(wrapper.find("ul").length).toEqual(0);
  });
  it("should render a list of animes if array is not empty", () => {
    const mockData = [
      {
        id: 1,
        title: {
          romaji: ""
        }
      }
    ];

    const wrapper = shallow(<AnimeList data={mockData} />);
    expect(wrapper.find("ul").length).toEqual(1);
  });
});
