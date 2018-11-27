import { combineReducers } from "redux";
import fetchAnime from "./fetchAnime";
import modes from "./modes";
import sideBar from "./sideBar";
import animeDetails from "./animeDetails";
import saved from "./saved";
import playlists from "./playlists";
import fetchedVideos from "./fetchedVideos";

export default combineReducers({
  fetchAnime,
  fetchedVideos,
  modes,
  sideBar,
  animeDetails,
  saved,
  playlists
});
