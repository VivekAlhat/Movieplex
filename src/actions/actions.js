export const LOAD_MOVIES_PROGRESS = "LOAD_MOVIES_PROGRESS";
export const LOAD_MOVIES_SUCCESS = "LOAD_MOVIES_SUCCESS";
export const LOAD_MOVIES_FAILURE = "LOAD_MOVIES_FAILURE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";

export const loadMoviesProgress = () => ({
  type: LOAD_MOVIES_PROGRESS,
});

export const loadMoviesFailure = () => ({
  type: LOAD_MOVIES_FAILURE,
});

export const loadMoviesSuccess = (movies) => ({
  type: LOAD_MOVIES_SUCCESS,
  payload: {
    movies,
  },
});
