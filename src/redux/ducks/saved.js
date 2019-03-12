import axios from "axios";

const SAVE_ANIME = "SAVE_ANIME";
const UNSAVE_ANIME = "UNSAVE_ANIME";
const ORDER_DES = "ORDER_DES";
const ORDER_ASC = "ORDER_ASC";
const CHANGE_SCORE = "CHANGE_SCORE";
const CHANGE_STATE = "CHANGE_STATE";
const INC_WATCHED_COUNTER = "INC_WATCHED_COUNTER";
const DEC_WATCHED_COUNTER = "DEC_WATCHED_COUNTER";
const UPDATE_ANIME = "UPDATE_ANIME";
const RESET_STATE = "RESET_STATE";
const UPDATE_REASON = "UPDATE_REASON";

// Push a new object with anime information from the API,
// in adition it initializes some states for future operations.
function saveAnime(state, action) {
  return [
    ...state,
    {
      ...action.item,
      title: action.item.title.romaji,
      myScore: 1,
      myState: "To Watch",
      source: action.item.source ? action.item.source : "UNKNOWN",
      episodesWatched: 0,
      reason: "",
      nextAiringEpisode: action.item.nextAiringEpisode && {
        ...action.item.nextAiringEpisode,
        timeUntilAiring: secondsToDhm(
          action.item.nextAiringEpisode.timeUntilAiring
        )
      }
    }
  ];
}
// On component mount this function updates every real time information
// such as time remaining before next episode.
function updateAnime(state, action) {
  const { id, nextAiringEpisode, averageScore, status } = action.data;

  return state.map(data => {
    if (data.id === id) {
      return {
        ...data,
        nextAiringEpisode: data.nextAiringEpisode && {
          episode: nextAiringEpisode.episode,
          timeUntilAiring: secondsToDhm(nextAiringEpisode.timeUntilAiring)
        },
        averageScore: averageScore,
        status: status
      };
    }
    return data;
  });
}
// Change myState (watching, to watch, completed) and updates
// your watched episodes.
function updateState(state, action) {
  return state.map(item => {
    if (item.id === action.id) {
      if (action.state === "Completed") {
        return {
          ...item,
          myState: action.state,
          episodesWatched: item.episodes || item.nextAiringEpisode.episode - 1
        };
      }
      if (action.state === "Watching") {
        return {
          ...item,
          myState: action.state,
          episodesWatched: 0
        };
      }
      return { ...item, myState: action.state };
    }
    return item;
  });
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case SAVE_ANIME:
      return saveAnime(state, action);

    case UPDATE_ANIME:
      return updateAnime(state, action);

    case UNSAVE_ANIME:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case ORDER_ASC:
      return updateOrder(state, action.head, "asc");

    case ORDER_DES:
      return updateOrder(state, action.head, "des");

    case CHANGE_SCORE:
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, myScore: Number(action.score) };
        }
        return item;
      });

    case CHANGE_STATE:
      return updateState(state, action);

    case INC_WATCHED_COUNTER:
      return updateCounter(state, action.id, "add");

    case DEC_WATCHED_COUNTER:
      return updateCounter(state, action.id, "substract");
    case UPDATE_REASON:
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, reason: action.reason };
        }
        return item;
      });
    case RESET_STATE:
      return [];
    default:
      return state;
  }
}

export function fetchUpdated(data) {
  return { type: UPDATE_ANIME, data };
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
export function changeScore(id, score) {
  return { type: CHANGE_SCORE, id, score };
}
export function changeState(id, state) {
  return { type: CHANGE_STATE, id, state };
}
export function incWatchedCounter(id) {
  return { type: INC_WATCHED_COUNTER, id };
}
export function decWatchedCounter(id) {
  return { type: DEC_WATCHED_COUNTER, id };
}
export function updateReason(reason, id) {
  return { type: UPDATE_REASON, reason, id };
}
export function resetState() {
  return { type: RESET_STATE };
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
function updateCounter(array, id, operation) {
  if (operation === "add") {
    return array.map(item => {
      if (item.id === id) {
        return {
          ...item,
          episodesWatched: item.episodesWatched + 1
        };
      }
      return item;
    });
  }

  if (operation === "substract") {
    return array.map(item => {
      if (item.id === id) {
        return {
          ...item,
          episodesWatched: item.episodesWatched - 1
        };
      }
      return item;
    });
  }
}
function updateOrder(array, head, order) {
  if (order === "asc") {
    return array
      .slice()
      .sort((a, b) => (a[head] > b[head] ? 1 : b[head] > a[head] ? -1 : 0));
  }
  if (order === "des") {
    return array
      .slice()
      .sort((a, b) => (a[head] < b[head] ? 1 : b[head] < a[head] ? -1 : 0));
  }
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
