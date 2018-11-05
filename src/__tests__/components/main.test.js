import React from "react";
import { shallow } from "enzyme";
import { Main } from "../../components/Main";

describe("Anilist component", () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<Main fetchDataAnime={mockFunc} />);

  it("should render a text input", () => {
    expect(wrapper.find("div > input").length).toEqual(1);
  });
  it("should respond to change event and update the state of the input state", () => {
    wrapper
      .find("div > input")
      .simulate("change", { target: { value: "anime" } });
    expect(wrapper.state("input")).toEqual("anime");
    expect(mockFunc.mock.calls.length).toBe(1);
  });
});
