import React from "react";
import { shallow } from "enzyme";
import { Main } from "../../components/anime/Main";

describe("Anilist component", () => {
  const mockFunc = jest.fn();
  const mockProps = [];
  const wrapper = shallow(
    <Main fetchDataAnime={mockFunc} animeList={mockProps} />
  );

  it("should render a text input", () => {
    expect(wrapper.find("div > input").length).toEqual(1);
  });

  it("should respond to change event and update the input state", () => {
    wrapper
      .find("div > input")
      .simulate("change", { target: { value: "anime" } });
    expect(wrapper.state("input")).toEqual("anime");
    expect(mockFunc.mock.calls.length).toBe(1);
  });

  it("should not render a list if prop is an empty array", () => {
    expect(wrapper.find("AnimeList").length).toEqual(0);
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
    const wrapper = shallow(
      <Main fetchDataAnime={mockFunc} animeList={mockData} />
    );
    expect(wrapper.find("AnimeList").length).toEqual(1);
  });
});
