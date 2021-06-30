import {
  LOAD_MOVIES_FAILURE,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_PROGRESS,
  SEARCH_MOVIE_BY_ID,
  SEARCH_BY_QUERY,
} from "../actions/actions";

const initialState = {
  isLoading: false,
  movies: { results: [] },
  search: { movieData: {}, cast: {}, similar: {}, reviews: {} },
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_MOVIE_BY_ID: {
      const { movie } = payload;
      return {
        ...state,
        isLoading: false,
        search: movie,
      };
    }
    case SEARCH_BY_QUERY: {
      const { movies } = payload;
      return {
        ...state,
        isLoading: false,
        movies: movies,
      };
    }
    case LOAD_MOVIES_SUCCESS: {
      const { movies } = payload;
      return {
        ...state,
        isLoading: false,
        movies: movies,
      };
    }
    case LOAD_MOVIES_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_MOVIES_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
