export const getMovies = (state) => state.movies.results;

export const getTotalPages = (state) => state.movies.total_pages;

export const getLoading = (state) => state.isLoading;

export const getSearchedMovie = (state) => state.search;

export const getSearchedMovieInfo = (state) => state.search.movieData;

export const getSearchedMovieCast = (state) => state.search.cast;

export const getSearchedMovieSimilar = (state) => state.search.similar;

export const getSearchedMovieReviews = (state) => state.search.reviews;

export const getFavorites = (state) => state.favorites;

export const getWatchlist = (state) => state.watchlist;

export const getTheme = (state) => state.theme;
