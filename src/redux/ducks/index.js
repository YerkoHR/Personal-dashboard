import { combineReducers } from "redux";
import fetchAnime from "./fetchAnime";
import modes from "./modes";
import sideBar from "./sideBar";
import animeDetails from "./animeDetails";
import saved from "./saved";

export default combineReducers({
  fetchAnime,
  modes,
  sideBar,
  animeDetails,
  saved
});
