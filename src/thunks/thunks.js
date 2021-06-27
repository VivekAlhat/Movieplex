import {
  loadMoviesFailure,
  loadMoviesProgress,
  loadMoviesSuccess,
} from "../actions/actions";

export const loadMovies = () => async (dispatch, getState) => {
  try {
    dispatch(loadMoviesProgress());
    const response = await fetch(`http://localhost:8000/movies/popular`);
    const movies = await response.json();
    dispatch(loadMoviesSuccess(movies));
  } catch (err) {
    dispatch(loadMoviesFailure());
    dispatch(displayAlert(err));
  }
};

export const displayAlert = (err) => () => {
  alert(err);
};
