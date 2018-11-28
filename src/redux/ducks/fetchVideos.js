import axios from "axios";

export const FETCH_VIDEO_SUCCESS = "FETCH_VIDEO_SUCCESS";
export const FETCH_VIDEO_REQUEST = "FETCH_VIDEO_REQUEST";
export const FETCH_VIDEO_FAILURE = "FETCH_VIDEO_FAILURE";

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
        results: action.data
      };
    case FETCH_VIDEO_FAILURE:
      return { ...state, error: action.error };
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
