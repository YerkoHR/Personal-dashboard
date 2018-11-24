export const ADD = "ADD";
export const REMOVE = "REMOVE";

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.item];
    case REMOVE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export function addItem(item) {
  return { type: ADD, item };
}
export function removeItem(index) {
  return { type: REMOVE, index };
}
