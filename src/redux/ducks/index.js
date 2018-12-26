import { combineReducers } from "react-redux";
import fetchAnime from "./fetchAnime";
import modes from "./modes";
import sideBar from "./sideBar";
import animeDetails from "./animeDetails";
import saved from "./saved";
import playlists from "./playlists";
import fetchVideos from "./fetchVideos";

export default combineReducers({
  fetchAnime,
  fetchVideos,
  modes,
  sideBar,
  animeDetails,
  saved,
  playlists
});
