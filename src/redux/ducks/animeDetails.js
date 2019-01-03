import axios from "axios";

export const FETCH_DETAILS = "FETCH_DETAILS";

export default function reducer(state = null, action) {
  switch (action.type) {
    case FETCH_DETAILS:
      return action.anime;
    default:
      return state;
  }
}

export function fetchDetailsSuccess(anime) {
  return { type: FETCH_DETAILS, anime };
}

export function fetchDetails(id) {
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
                title {
                  romaji
                }
                coverImage {
                  extraLarge
                  large
                }
                nextAiringEpisode {
                  episode
                  timeUntilAiring
                }
                averageScore
                description
                id
                format
                episodes
                status
                source
                genres
                trailer{ 
                  id
                }
              }
          }
        `
      }
    }).then(response => {
      dispatch(fetchDetailsSuccess(response.data.data.Media));
    });
  };
}
