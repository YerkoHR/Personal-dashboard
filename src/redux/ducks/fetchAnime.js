import axios from "axios";

export const FETCH_ANIME_SUCCESS = "FETCH_ANIME_SUCCESS";
export const FETCH_ANIME_REQUEST = "FETCH_ANIME_REQUEST";
export const FETCH_ANIME_FAILURE = "FETCH_ANIME_FAILURE";

const initialState = {
  results: [],
  fetching: false,
  error: null,
  animeDetails: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ANIME_REQUEST:
      return { ...state, fetching: true };
    case FETCH_ANIME_SUCCESS:
      return {
        ...state,
        fetching: false,
        results: action.data
      };
    case FETCH_ANIME_FAILURE:
      return { ...state, error: action.error.response.status };
    default:
      return state;
  }
}
export function fetchAnimeRequest() {
  return { type: FETCH_ANIME_REQUEST };
}
export function fetchAnimeSuccess(data) {
  return { type: FETCH_ANIME_SUCCESS, data };
}

export function fetchAnimeFailure(error) {
  return { type: FETCH_ANIME_FAILURE, error };
}

export function fetchDataAnime(input) {
  return dispatch => {
    dispatch(fetchAnimeRequest());
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
        dispatch(fetchAnimeSuccess(response.data.data.Page.media));
      })
      .catch(error => {
        dispatch(fetchAnimeFailure(error));
      });
  };
}
