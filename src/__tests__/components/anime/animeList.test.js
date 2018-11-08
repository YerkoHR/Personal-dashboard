import React from "react";
import { shallow } from "enzyme";
import AnimeList from "../../components/AnimeList";

describe("Anime list", () => {
  const mockProps = [];
  const wrapper = shallow(<AnimeList data={mockProps} />);

  it("should render an unordered list ", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });
});
