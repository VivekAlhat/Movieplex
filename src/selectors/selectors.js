export const getMovies = (state) => state.movies.results;

export const getLoading = (state) => state.isLoading;

export const getSearchedMovie = (state) => state.search;

export const getSearchedMovieInfo = (state) => state.search.movieData;

export const getSearchedMovieCast = (state) => state.search.cast;

export const getSearchedMovieSimilar = (state) => state.search.similar;

export const getSearchedMovieReviews = (state) => state.search.reviews;

export const getFavorites = (state) => state.favorites;

export const getWatchlist = (state) => state.watchlist;
