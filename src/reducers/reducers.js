import {
  LOAD_MOVIES_FAILURE,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_PROGRESS,
} from "../actions/actions";

const initialState = {
  isLoading: false,
  movies: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_MOVIES_SUCCESS: {
      const { movies } = payload;
      return {
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
