import axios from "axios";

const FETCH_VIDEO_SUCCESS = "FETCH_VIDEO_SUCCESS";
const FETCH_VIDEO_REQUEST = "FETCH_VIDEO_REQUEST";
const FETCH_VIDEO_FAILURE = "FETCH_VIDEO_FAILURE";
const FETCH_VIDEO_DETAILS_SUCCESS = "FETCH_VIDEO_DETAILS_SUCCESS";
const FETCH_VIDEO_DETAILS_FAILURE = "FETCH_VIDEO_DETAILS_FAILURE";
const TOGGLE_PLAYER = "TOGGLE_PLAYER";
const TOGGLE_PLAYLIST = "TOGGLE_PLAYLIST";
const TOGGLE_CREATE_PL = "TOGGLE_CREATE_PL";

const API_KEY = "AIzaSyBf4oFVY1onlbBlOdBoUp5iXyrEOQFssv8";

const initialState = {
  results: [],
  fetching: false,
  error: null,
  errorDetails: null
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
    case FETCH_VIDEO_DETAILS_SUCCESS:
      return {
        ...state,
        results: state.results.map((data, index) => {
          return {
            ...data,
            contentDetails: {
              ...action.data[index].contentDetails,
              duration: formatTime(action.data[index].contentDetails.duration)
            }
          };
        })
      };
    case FETCH_VIDEO_DETAILS_FAILURE:
      return {
        ...state,
        errorDetails: action.error
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
export function fetchVideoDetailsSuccess(data) {
  return { type: FETCH_VIDEO_DETAILS_SUCCESS, data };
}
export function fetchVideoDetailsFailure(error) {
  return { type: FETCH_VIDEO_DETAILS_FAILURE, error };
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

export function fetchDetailsVideo(idArray) {
  return dispatch => {
    return axios(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${idArray}&key=${API_KEY}`
    )
      .then(response => {
        dispatch(fetchVideoDetailsSuccess(response.data.items));
      })
      .catch(error => {
        dispatch(fetchVideoDetailsFailure(error));
        console.log(error);
      });
  };
}

export function fetchDataVideo(input) {
  return dispatch => {
    dispatch(fetchVideoRequest());
    return axios(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=15&order=relevance&type=video&key=${API_KEY}`
    )
      .then(response => {
        dispatch(fetchVideoSuccess(response.data.items));
        const ids = response.data.items.map(item => item.id.videoId).join();
        return axios(
          `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${ids}&key=${API_KEY}`
        ).then(response => {
          dispatch(fetchVideoDetailsSuccess(response.data.items));
        });
      })
      .catch(error => {
        dispatch(fetchVideoFailure(error));
      });
  };
}

function formatTime(duration) {
  let reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  let hours = 0,
    minutes = 0,
    seconds = 0;

  if (reptms.test(duration)) {
    let matches = reptms.exec(duration);
    if (matches[1]) hours = Number(matches[1]);
    if (matches[2]) minutes = Number(matches[2]);
    if (matches[3]) seconds = Number(matches[3]);

    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
  }
  let result =
    (hours !== "00" ? hours + ":" : "") +
    (minutes !== "00" ? minutes + ":" : "") +
    seconds;
  return result;
}
