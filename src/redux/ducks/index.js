import { combineReducers } from "redux";
import fetchAnime from "./fetchAnime";
import modes from "./modes";

export default combineReducers({
  fetchAnime,
  modes
});
