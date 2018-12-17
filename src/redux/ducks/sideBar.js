import React from "react";

export const LOAD_COMPONENT = "LOAD_COMPONENT";

const initialState = {
  active: "SEARCH ANIME",
  items: [
    {
      title: "SEARCH ANIME",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 24 24">
          <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z" />
        </svg>
      )
    },
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
      title: "SEARCH VIDEO",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 24 24">
          <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z" />
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
      return { ...state, active: action.component };
    default:
      return state;
  }
}

export function loadComponent(component) {
  return { type: LOAD_COMPONENT, component };
}
