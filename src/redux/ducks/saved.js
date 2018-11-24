export const ADD = "ADD";
export const REMOVE = "REMOVE";

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.item];
    default:
      return state;
  }
}

export function addItem(item) {
  return { type: ADD, item };
}
export function removeItem(id) {
  return { type: REMOVE, id };
}
