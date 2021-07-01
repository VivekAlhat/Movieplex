import { find } from "lodash";
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
      const { movie } = payload;
      if (!find(state.watchlist, { id: movie.id })) {
        return {
          ...state,
          watchlist: state.watchlist.concat(movie),
        };
      } else {
        return {
          ...state,
        };
      }
    }
    case REMOVE_FROM_WATCHLIST: {
      const { id } = payload;
      return {
        ...state,
        watchlist: state.watchlist.filter((item) => item.id !== id),
      };
    }
    case ADD_FAVORITE: {
      const { movie } = payload;
      if (!find(state.favorites, { id: movie.id })) {
        return {
          ...state,
          favorites: state.favorites.concat(movie),
        };
      } else {
        return {
          ...state,
        };
      }
    }
    case REMOVE_FAVORITE: {
      const { id } = payload;
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== id),
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
