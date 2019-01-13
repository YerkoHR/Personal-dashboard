const CREATE_PLAYLIST = "CREATE_PLAYLIST";
const DELETE_PLAYLIST = "DELETE_PLAYLIST";
const ADD_VIDEO = "ADD_VIDEO";
const DELETE_VIDEO = "DELETE_VIDEO";
const CHANGE_PLAYLIST = "CHANGE_PLAYLIST";
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
      return Object.keys(state).reduce(
        (acc, key) =>
          key !== action.key ? { ...acc, [key]: state[key] } : acc,
        {}
      );
    case ADD_VIDEO:
      return {
        ...state,
        [action.key]: [...action.key, action.video]
      };

    case DELETE_VIDEO:
      return {
        ...state,
        [action.key]: [
          ...state[action.key].slice(0, action.index),
          ...state[action.key].slice(action.index + 1)
        ]
      };

    default:
      return state;
  }
}
// CREATE PLAYLIST NEEDS A TITLE, IT RETURNS AN OBJECTWITH AN EMPTY IDS ARRAY.
export function createPlaylist(title) {
  return { type: CREATE_PLAYLIST, title };
}
// DELETE PLAYLIST NEEDS AN INDEX THAT REPRESENTS THE POSITION IN
// THE PLAYLISTS ARRAY.
export function deletePlaylist(key) {
  return { type: DELETE_PLAYLIST, key };
}
// ADD VIDEO NEEDS THE VIDEO'S ID AND AN INDEX THAT REPRESENTS THE
// POSITION IN THE PLAYLISTS ARRAY.
export function addVideo(video, key) {
  return { type: ADD_VIDEO, video, key };
}
// DELETE VIDEO NEEDS AN INDEX THAT REPRESENTS THE POSITION IN THE
// PLAYLISTS ARRAY AND AN ADDITIONAL INDEX THAT REPRESENTS THE
// POSITION IN THE IDS ARRAY.
export function deleteVideo(key, index) {
  return { type: DELETE_VIDEO, key, index };
}
export function changeActivePlaylist(title) {
  return { type: CHANGE_PLAYLIST, title };
}
