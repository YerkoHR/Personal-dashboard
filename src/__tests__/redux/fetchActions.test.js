import * as actions from "../../redux/ducks/animeReducer";

const expectedActions = [
  {
    type: actions.FETCH_REQUEST
  },
  {
    type: actions.FETCH_SUCCESS,
    data: []
  },
  {
    type: actions.FETCH_FAILURE,
    error: ""
  }
];

describe("fetch actions", () => {
  it("should create an action to request data", () => {
    expect(actions.fetchDataRequest()).toEqual(expectedActions[0]);
  });

  it("should create an action to add data received", () => {
    expect(actions.fetchDataSuccess([])).toEqual(expectedActions[1]);
  });
  it("should create an action to add error message", () => {
    expect(actions.fetchDataFailure("")).toEqual(expectedActions[2]);
  });
});
