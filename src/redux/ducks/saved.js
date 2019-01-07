import axios from "axios";

const SAVE_ANIME = "SAVE_ANIME";
const UNSAVE_ANIME = "UNSAVE_ANIME";
const ORDER_DES = "ORDER_DES";
const ORDER_ASC = "ORDER_ASC";
const CHANGE_SCORE = "CHANGE_SCORE";
const CHANGE_STATE = "CHANGE_STATE";
const INC_WATCHED_COUNTER = "INC_WATCHED_COUNTER";
const DEC_WATCHED_COUNTER = "DEC_WATCHED_COUNTER";
const UPDATE_DATA = "UPDATE_DATA";

export default function reducer(state = [], action) {
  switch (action.type) {
    case SAVE_ANIME:
      return [
        ...state,
        {
          ...action.item,
          title: action.item.title.romaji,
          myScore: 1,
          myState: "To watch",
          source: action.item.source ? action.item.source : "UNKNOWN",
          episodesWatched: 0,
          nextAiringEpisode: action.item.nextAiringEpisode && {
            ...action.item.nextAiringEpisode,
            timeUntilAiring: secondsToDhm(
              action.item.nextAiringEpisode.timeUntilAiring
            )
          }
        }
      ];
    case UPDATE_DATA:
      return state.map(data => {
        if (data.id === action.data.id) {
          return {
            ...data,
            nextAiringEpisode: data.nextAiringEpisode && {
              episode: action.data.nextAiringEpisode.episode,
              timeUntilAiring: secondsToDhm(
                action.data.nextAiringEpisode.timeUntilAiring
              )
            },
            averageScore: action.data.averageScore,
            status: action.data.status
          };
        }
        return data;
      });
    case UNSAVE_ANIME:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case ORDER_ASC:
      return state
        .slice()
        .sort((a, b) =>
          a[action.head] > b[action.head]
            ? 1
            : b[action.head] > a[action.head]
            ? -1
            : 0
        );

    case ORDER_DES:
      return state
        .slice()
        .sort((a, b) =>
          a[action.head] < b[action.head]
            ? 1
            : b[action.head] < a[action.head]
            ? -1
            : 0
        );

    case CHANGE_SCORE:
      return state.map((x, index) => {
        if (index === action.index) {
          return { ...x, myScore: Number(action.score) };
        }
        return x;
      });
    case CHANGE_STATE:
      return state.map((x, index) => {
        if (index === action.index) {
          return action.state === "Completed"
            ? {
                ...x,
                myState: action.state,
                episodesWatched:
                  state[action.index].episodes ||
                  state[action.index].nextAiringEpisode.episode - 1
              }
            : { ...x, myState: action.state };
        }
        return x;
      });
    case INC_WATCHED_COUNTER:
      return state.map((x, index) => {
        if (index === action.index) {
          return {
            ...x,
            episodesWatched: state[action.index].episodesWatched + 1
          };
        }
        return x;
      });
    case DEC_WATCHED_COUNTER:
      return state.map((x, index) => {
        if (index === action.index) {
          return {
            ...x,
            episodesWatched: state[action.index].episodesWatched - 1
          };
        }
        return x;
      });
    default:
      return state;
  }
}
export function fetchUpdated(data) {
  return { type: UPDATE_DATA, data };
}
export function addItem(item) {
  return { type: SAVE_ANIME, item };
}
export function removeItem(index) {
  return { type: UNSAVE_ANIME, index };
}
export function orderAsc(head) {
  return { type: ORDER_ASC, head };
}
export function orderDes(head) {
  return { type: ORDER_DES, head };
}
export function changeScore(index, score) {
  return { type: CHANGE_SCORE, index, score };
}
export function changeState(index, state) {
  return { type: CHANGE_STATE, index, state };
}
export function incWatchedCounter(index) {
  return { type: INC_WATCHED_COUNTER, index };
}
export function decWatchedCounter(index) {
  return { type: DEC_WATCHED_COUNTER, index };
}

// Format Time until airing next episode.

function secondsToDhm(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);

  var dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes") : "";
  return dDisplay + hDisplay + mDisplay;
}

export function fetchSavedAnime(id) {
  return dispatch => {
    return axios({
      url: "https://graphql.anilist.co",
      method: "post",

      data: {
        variables: {
          id: id
        },
        query: `
          query($id: Int) {
              Media(id: $id) {
                id
                nextAiringEpisode {
                  episode
                  timeUntilAiring
                }
                averageScore
                status
              }
          }
        `
      }
    }).then(response => {
      dispatch(fetchUpdated(response.data.data.Media));
    });
  };
}
