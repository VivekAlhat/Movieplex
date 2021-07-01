export const LOAD_MOVIES_PROGRESS = "LOAD_MOVIES_PROGRESS";
export const LOAD_MOVIES_SUCCESS = "LOAD_MOVIES_SUCCESS";
export const LOAD_MOVIES_FAILURE = "LOAD_MOVIES_FAILURE";
export const SEARCH_MOVIE_BY_ID = "SEARCH_MOVIE_BY_ID";
export const SEARCH_BY_QUERY = "SEARCH_BY_QUERY";
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

export const searchMovieByID = (movie) => ({
  type: SEARCH_MOVIE_BY_ID,
  payload: {
    movie,
  },
});

export const searchByQuery = (movies) => ({
  type: SEARCH_BY_QUERY,
  payload: {
    movies,
  },
});

export const addToWatchlist = (movie) => ({
  type: ADD_TO_WATCHLIST,
  payload: {
    movie,
  },
});

export const removeFromWatchlist = (id) => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: {
    id,
  },
});

export const addToFavorites = (movie) => ({
  type: ADD_FAVORITE,
  payload: {
    movie,
  },
});

export const removeFromFavorites = (id) => ({
  type: REMOVE_FAVORITE,
  payload: {
    id,
  },
});
