export const LIST_MODE = "LIST_MODE";
export const SCREEN_MODE = "SCREEN_MODE";

const initialState = {
  screenMode: "light",
  listMode: "table"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SCREEN_MODE:
      return { ...state, screenMode: action.mode };
    case LIST_MODE:
      return {
        ...state,
        listMode: action.mode
      };
    default:
      return state;
  }
}

export function changeScreenMode(mode) {
  return { type: SCREEN_MODE, mode };
}
export function changeListMode(mode) {
  return { type: LIST_MODE, mode };
}
