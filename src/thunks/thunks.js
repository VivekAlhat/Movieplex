import {
  loadMoviesFailure,
  loadMoviesProgress,
  loadMoviesSuccess,
  searchMovieByID,
  searchByQuery,
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

export const searchByID = (id) => async (dispatch, getState) => {
  try {
    dispatch(loadMoviesProgress());
    const response = await fetch(`http://localhost:8000/movies/find/${id}`);
    const movieData = await response.json();

    const simres = await fetch(
      `http://localhost:8000/movies/find/similar/${id}`
    );
    const similar = await simres.json();

    const castres = await fetch(`http://localhost:8000/movies/find/cast/${id}`);
    const cast = await castres.json();

    const revres = await fetch(
      `http://localhost:8000/movies/find/reviews/${id}`
    );
    const reviews = await revres.json();

    const movie = {
      movieData: movieData,
      cast: cast,
      similar: similar,
      reviews: reviews,
    };

    dispatch(searchMovieByID(movie));
  } catch (err) {
    dispatch(loadMoviesFailure());
    dispatch(displayAlert(err));
  }
};

export const searchMovieByQuery = (query) => async (dispatch, getState) => {
  try {
    dispatch(loadMoviesProgress());
    const response = await fetch(`http://localhost:8000/movies/search/`, {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify({ query: query }),
    });
    const movies = await response.json();
    dispatch(searchByQuery(movies));
  } catch (err) {
    dispatch(loadMoviesFailure());
    dispatch(displayAlert(err));
  }
};

export const displayAlert = (err) => () => {
  alert(err);
};
