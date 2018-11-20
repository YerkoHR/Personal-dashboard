import React from "react";

export const LOAD_COMPONENT = "LOAD_COMPONENT";

const initialState = {
  activeComponent: null,
  items: [
    {
      title: "ANIME LIST",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M80 280h256v48H80zM80 184h320v48H80zM80 88h352v48H80z" />
          <g>
            <path d="M80 376h288v48H80z" />
          </g>
        </svg>
      )
    },
    {
      title: "PLAYLIST",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M96 52v408l320-204L96 52z" />
        </svg>
      )
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMPONENT:
      return { ...state, screenMode: action.component };

    default:
      return state;
  }
}

export function changeCurrentComponent(component) {
  return { type: LOAD_COMPONENT, component };
}
