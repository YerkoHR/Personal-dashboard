const CREATE_PLAYLIST = "CREATE_PLAYLIST";
const DELETE_PLAYLIST = "DELETE_PLAYLIST";
const ADD_VIDEO = "ADD_VIDEO";
const DELETE_VIDEO = "DELETE_VIDEO";

export default function reducer(state = [], action) {
  switch (action.type) {
    case CREATE_PLAYLIST:
      return [
        ...state,
        {
          title: action.title,
          ids: []
        }
      ];
    case DELETE_PLAYLIST:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case ADD_VIDEO:
      return state.map((x, index) => {
        if (index === action.index) {
          return { ...x, ids: x.ids.concat(action.video) };
        }
        return x;
      });
    case DELETE_VIDEO:
      return state.map((x, index) => {
        if (index === action.index) {
          return {
            ...x,
            ids: [
              ...x.ids.slice(0, action.toRemove),
              ...x.ids.slice(action.toRemove + 1)
            ]
          };
        }
        return x;
      });
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
export function deletePlaylist(index) {
  return { type: DELETE_PLAYLIST, index };
}
// ADD VIDEO NEEDS THE VIDEO'S ID AND AN INDEX THAT REPRESENTS THE
// POSITION IN THE PLAYLISTS ARRAY.
export function addVideo(video, index) {
  return { type: ADD_VIDEO, video, index };
}
// DELETE VIDEO NEEDS AN INDEX THAT REPRESENTS THE POSITION IN THE
// PLAYLISTS ARRAY AND AN ADDITIONAL INDEX THAT REPRESENTS THE
// POSITION IN THE IDS ARRAY.
export function deleteVideo(index, toRemove) {
  return { type: DELETE_VIDEO, index, toRemove };
}
