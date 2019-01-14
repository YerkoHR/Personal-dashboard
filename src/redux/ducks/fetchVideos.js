import axios from "axios";

const FETCH_VIDEO_SUCCESS = "FETCH_VIDEO_SUCCESS";
const FETCH_VIDEO_REQUEST = "FETCH_VIDEO_REQUEST";
const FETCH_VIDEO_FAILURE = "FETCH_VIDEO_FAILURE";
const TOGGLE_PLAYER = "TOGGLE_PLAYER";
const TOGGLE_PLAYLIST = "TOGGLE_PLAYLIST";
const TOGGLE_CREATE_PL = "TOGGLE_CREATE_PL";

const initialState = {
  results: [],
  fetching: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEO_REQUEST:
      return { ...state, fetching: true };
    case FETCH_VIDEO_SUCCESS:
      return {
        ...state,
        fetching: false,
        results: action.data.map(x => {
          return {
            ...x,
            showVideo: false,
            showPlaylists: false,
            showCreatePL: false
          };
        })
      };
    case FETCH_VIDEO_FAILURE:
      return { ...state, error: action.error };
    case TOGGLE_PLAYER:
      return {
        ...state,
        results: state.results.map((x, index) => {
          if (index === action.index) {
            return { ...x, showVideo: !x.showVideo };
          }
          return x;
        })
      };
    case TOGGLE_PLAYLIST:
      return {
        ...state,
        results: state.results.map((x, index) => {
          if (index === action.index) {
            return { ...x, showPlaylists: !x.showPlaylists };
          }
          return x;
        })
      };
    case TOGGLE_CREATE_PL:
      return {
        ...state,
        results: state.results.map((x, index) => {
          if (index === action.index) {
            return { ...x, showCreatePL: !x.showCreatePL };
          }
          return x;
        })
      };
    default:
      return state;
  }
}
export function fetchVideoRequest() {
  return { type: FETCH_VIDEO_REQUEST };
}
export function fetchVideoSuccess(data) {
  return { type: FETCH_VIDEO_SUCCESS, data };
}
export function fetchVideoFailure(error) {
  return { type: FETCH_VIDEO_FAILURE, error };
}
export function togglePlayer(index) {
  return { type: TOGGLE_PLAYER, index };
}
export function togglePlaylist(index) {
  return { type: TOGGLE_PLAYLIST, index };
}
export function toggleCreatePL(index) {
  return { type: TOGGLE_CREATE_PL, index };
}

export function fetchDataVideo(input) {
  return dispatch => {
    const API_KEY = "AIzaSyBf4oFVY1onlbBlOdBoUp5iXyrEOQFssv8";
    dispatch(fetchVideoRequest());
    return axios(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=15&order=relevance&key=${API_KEY}`
    )
      .then(response => {
        dispatch(fetchVideoSuccess(response.data.items));
      })
      .catch(error => {
        dispatch(fetchVideoFailure(error));
      });
  };
}
