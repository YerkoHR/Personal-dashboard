import animeReducer, {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS
} from "../../redux/ducks/animeReducer";

describe("fetch anime reducer", () => {
  it("should return the initial state", () => {
    expect(animeReducer(undefined, {})).toEqual({
      anime: [],
      fetching: false,
      error: ""
    });
  });
  it("should handle FETCH_REQUEST", () => {
    expect(animeReducer({}, { type: FETCH_REQUEST })).toEqual({
      fetching: true
    });
  });
  it("should handle FETCH_SUCCESS", () => {
    expect(animeReducer({}, { type: FETCH_SUCCESS, data: [] })).toEqual({
      anime: [],
      fetching: false
    });
  });
  it("should handle FETCH_FAILURE", () => {
    expect(animeReducer({}, { type: FETCH_FAILURE, error: "" })).toEqual({
      error: ""
    });
  });
});
