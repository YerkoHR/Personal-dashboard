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

// Push a new object with anime information from the API,
// in adition it initializes some states for future operations.
function saveAnime(state, action) {
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
  return state.map((x, index) => {
    if (index === action.index) {
      if (action.state === "Completed") {
        return {
          ...x,
          myState: action.state,
          episodesWatched:
            state[action.index].episodes ||
            state[action.index].nextAiringEpisode.episode - 1
        };
      }
      if (action.state === "Watching") {
        return {
          ...x,
          myState: action.state,
          episodesWatched: 0
        };
      }
      return { ...x, myState: action.state };
    }
    return x;
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
      return state.map((x, index) => {
        if (index === action.index) {
          return { ...x, myScore: Number(action.score) };
        }
        return x;
      });

    case CHANGE_STATE:
      return updateState(state, action);

    case INC_WATCHED_COUNTER:
      return updateCounter(state, action.index, "add");

    case DEC_WATCHED_COUNTER:
      return updateCounter(state, action.index, "substract");
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
function updateCounter(array, indexToChange, operation) {
  if (operation === "add") {
    return array.map((item, index) => {
      if (index === indexToChange) {
        return {
          ...item,
          episodesWatched: array[indexToChange].episodesWatched + 1
        };
      }
      return item;
    });
  }

  if (operation === "substract") {
    return array.map((item, index) => {
      if (index === indexToChange) {
        return {
          ...item,
          episodesWatched: array[indexToChange].episodesWatched - 1
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
