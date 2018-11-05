import React from "react";
import { shallow } from "enzyme";
import { Main } from "../../components/Main";

describe("Main", () => {
  let wrapper;
  const fetchDataAnime = jest.fn();

  wrapper = shallow(<Main fetchDataAnime={fetchDataAnime} />);

  it("should render self and subcomponents", () => {
    wrapper.find("div > button").simulate("click");
    expect(fetchDataAnime.mock.calls.length).toBe(1);
  });
});
