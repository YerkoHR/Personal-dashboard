import axios from "axios";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ANIME_DETAILS_SUCCESSFUL = "ANIME_DETAILS_SUCCESSFUL";

const initialState = {
  anime: [],
  fetching: false,
  error: null,
  animeDetails: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, fetching: true };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        anime: action.data
      };
    case FETCH_FAILURE:
      return { ...state, error: action.error.response.status };
    case ANIME_DETAILS_SUCCESSFUL:
      return { ...state, fetching: false, animeDetails: action.anime };
    default:
      return state;
  }
}
export function fetchDataRequest() {
  return { type: FETCH_REQUEST };
}
export function fetchDataSuccess(data) {
  return { type: FETCH_SUCCESS, data };
}

export function fetchDataFailure(error) {
  return { type: FETCH_FAILURE, error };
}
export function fetchDetailsSuccess(anime) {
  return { type: ANIME_DETAILS_SUCCESSFUL, anime };
}

export function fetchDataAnime(input) {
  return dispatch => {
    dispatch(fetchDataRequest());
    return axios({
      url: "https://graphql.anilist.co",
      method: "post",

      data: {
        variables: {
          search: input,
          perPage: 10
        },
        query: `
        query ($search: String, $perPage: Int) {
            Page(perPage: $perPage) {
                media(search: $search, type: ANIME) {
                    id
                    title {
                        romaji
                    }
                    startDate {
                        year
                    }
                    type
                    format
                    status
                    source
                    averageScore
                }
            }
        }
    `
      }
    })
      .then(response => {
        dispatch(fetchDataSuccess(response.data.data.Page.media));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
}
export function fetchDetails(id) {
  return dispatch => {
    dispatch(fetchDataRequest());
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
              title {
                romaji
              }
            }
        }
      `
      }
    })
      .then(response => {
        dispatch(fetchDetailsSuccess(response.data.data.Media));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
}
