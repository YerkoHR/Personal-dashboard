const CREATE_PLAYLIST = "CREATE_PLAYLIST";
const DELETE_PLAYLIST = "DELETE_PLAYLIST";
const ADD_VIDEO = "ADD_VIDEO";
const DELETE_VIDEO = "DELETE_VIDEO";
const CHANGE_PLAYLIST = "CHANGE_PLAYLIST";
const REORDER_PLAYLIST = "REORDER_PLAYLIST";
const EDIT_TITLE = "EDIT_TITLE";

const initialState = {
  active: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PLAYLIST:
      return {
        ...state,
        [action.title]: []
      };
    case DELETE_PLAYLIST:
      let clone = Object.assign({}, state);
      clone.active = action.key === state.active ? "" : state.active;
      delete clone[action.key];
      return clone;

    case ADD_VIDEO:
      return {
        ...state,
        [action.key]: [
          ...state[action.key],
          {
            id: action.video.id.videoId,
            title: action.video.snippet.title,
            duration: action.video.contentDetails.duration
          }
        ]
      };

    case DELETE_VIDEO:
      return {
        ...state,
        [action.key]: [
          ...state[action.key].slice(0, action.index),
          ...state[action.key].slice(action.index + 1)
        ]
      };
    case CHANGE_PLAYLIST:
      return {
        ...state,
        active: action.title
      };
    case REORDER_PLAYLIST:
      return {
        ...state,
        [action.key]: action.playlist
      };
    case EDIT_TITLE:
      let obj = Object.assign({}, state);
      delete obj[action.oldKey];
      return {
        ...obj,
        [action.newKey]: state[action.oldKey]
      };
    default:
      return state;
  }
}
export function createPlaylist(title) {
  return { type: CREATE_PLAYLIST, title };
}
export function deletePlaylist(key) {
  return { type: DELETE_PLAYLIST, key };
}
export function addVideo(key, video) {
  return { type: ADD_VIDEO, key, video };
}
export function deleteVideo(key, index) {
  return { type: DELETE_VIDEO, key, index };
}
export function changeActivePlaylist(title) {
  return { type: CHANGE_PLAYLIST, title };
}
export function reOrderPlaylist(key, playlist) {
  return { type: REORDER_PLAYLIST, key, playlist };
}
export function editPlaylistTitle(newKey, oldKey) {
  return { type: EDIT_TITLE, newKey, oldKey };
}
