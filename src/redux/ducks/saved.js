export const SAVE_ANIME = "SAVE_ANIME";
export const UNSAVE_ANIME = "UNSAVE_ANIME";
export const ORDER_DES = "ORDER_DES";
export const ORDER_ASC = "ORDER_ASC";
export const CHANGE_SCORE = "CHANGE_SCORE";
export const CHANGE_STATE = "CHANGE_STATE";

export default function reducer(state = [], action) {
  switch (action.type) {
    case SAVE_ANIME:
      return [...state, { ...action.item, myScore: 1, myState: "To watch" }];
    case UNSAVE_ANIME:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case ORDER_ASC:
      return state.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
    case ORDER_DES:
      return state.sort((a, b) =>
        a.title < b.title ? 1 : b.title < a.title ? -1 : 0
      );
    case CHANGE_SCORE:
      return state.map((x, index) => {
        if (index === action.index) {
          return { ...x, myScore: action.score };
        }
        return x;
      });
    case CHANGE_STATE:
      return state.map((x, index) => {
        if (index === action.index) {
          return { ...x, myState: action.state };
        }
        return x;
      });
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
export function orderAsc() {
  return { type: ORDER_ASC };
}
export function orderDes() {
  return { type: ORDER_DES };
}
export function changeScore(index, score) {
  return { type: CHANGE_SCORE, index, score };
}
export function changeState(index, state) {
  return { type: CHANGE_STATE, index, state };
}
