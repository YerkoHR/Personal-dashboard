import { combineReducers } from "redux";
import fetchAnime from "./fetchAnime";
import modes from "./modes";
import sideBar from "./sideBar";
import animeDetails from "./animeDetails";

export default combineReducers({
  fetchAnime,
  modes,
  sideBar,
  animeDetails
});
