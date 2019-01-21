import React from "react";
import { Search, List, Youtube } from "react-feather";

export const LOAD_COMPONENT = "LOAD_COMPONENT";

const initialState = {
  active: "SEARCH ANIME",
  items: [
    {
      title: "SEARCH ANIME",
      icon: <Search />
    },
    {
      title: "ANIME LIST",
      icon: <List />
    },
    {
      title: "SEARCH VIDEO",
      icon: <Search />
    },
    {
      title: "PLAYLIST",
      icon: <Youtube />
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
