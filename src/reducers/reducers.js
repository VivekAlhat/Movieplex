import {
  LOAD_MOVIES_FAILURE,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_PROGRESS,
  SEARCH_MOVIE_BY_ID,
  SEARCH_BY_QUERY,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/actions";

const initialState = {
  isLoading: false,
  movies: { results: [] },
  search: { movieData: {}, cast: {}, similar: {}, reviews: {} },
  favorites: [],
  watchlist: [],
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
    case ADD_TO_WATCHLIST: {
      const { id } = payload;
      if (state.watchlist.includes(id)) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          watchlist: state.watchlist.concat(id),
        };
      }
    }
    case REMOVE_FROM_WATCHLIST: {
      const { id } = payload;
      if (state.watchlist.includes(id)) {
        return {
          ...state,
          watchlist: state.watchlist.filter((item) => item !== id),
        };
      } else {
        return {
          ...state,
        };
      }
    }
    case ADD_FAVORITE: {
      const { id } = payload;
      if (state.favorites.includes(id)) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          favorites: state.favorites.concat(id),
        };
      }
    }
    case REMOVE_FAVORITE: {
      const { id } = payload;
      if (state.favorites.includes(id)) {
        return {
          ...state,
          favorites: state.favorites.filter((item) => item !== id),
        };
      } else {
        return {
          ...state,
        };
      }
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
