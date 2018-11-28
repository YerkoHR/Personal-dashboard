export const SAVE_ANIME = "SAVE_ANIME";
export const UNSAVE_ANIME = "UNSAVE_ANIME";

export default function reducer(state = [], action) {
  switch (action.type) {
    case SAVE_ANIME:
      return [...state, action.item];
    case UNSAVE_ANIME:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export function addItem(item) {
  return { type: SAVE_ANIME, item };
}
export function removeItem(index) {
  return { type: UNSAVE_ANIME, index };
}
