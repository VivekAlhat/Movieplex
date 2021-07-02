import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import { Select, MenuItem, Box } from "@material-ui/core";
import { loadMovies, searchByID } from "../thunks/thunks";
import {
  getLoading,
  getMovies,
  getTotalPages,
  getSearchedMovieInfo,
} from "../selectors/selectors";
import {
  MoviesContainer,
  LoadingContainer,
  MoviesFilter,
} from "./styled/styled";
import Loading from "./Loading";
import MoviesList from "./MoviesList";

const Movies = ({
  moviesData,
  isLoading,
  startLoadingMovies,
  loadMovie,
  totalPages,
  searchedMovie,
}) => {
  const [filter, setFilter] = useState("popular");
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    startLoadingMovies(filter, page);
    if (!Object.keys(searchedMovie).length === 0) {
      loadMovie(520763);
    }
  }, [startLoadingMovies, loadMovie, filter, page, searchedMovie]);

  const handleChange = (e) => {
    setFilter(e.target.value);
    setPage(1);
  };

  const MoviesListData = (
    <MoviesContainer>
      <MoviesFilter>
        <h3>Filter By :&nbsp;</h3>
        <Select
          style={{ color: "#dddddd", background: "none", width: "10rem" }}
          value={filter}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={"nowplaying"}>Now Playing</MenuItem>
          <MenuItem value={"popular"}>Popular</MenuItem>
          <MenuItem value={"toprated"}>Top Rated</MenuItem>
          <MenuItem value={"upcoming"}>Upcoming</MenuItem>
        </Select>
      </MoviesFilter>
      {moviesData.length > 0 ? (
        <>
          <MoviesList moviesData={moviesData} />
          {location.pathname === "/" && (
            <Box my={2} display="flex" justifyContent="center">
              <Pagination
                page={page}
                count={totalPages}
                color="primary"
                size="large"
                siblingCount={2}
                boundaryCount={2}
                onChange={(e, value) => {
                  setPage(value);
                }}
              />
            </Box>
          )}
        </>
      ) : (
        <LoadingContainer>
          <div style={{ color: "#dddddd", textAlign: "center" }}>
            <p>Ah! So empty ... Please search again ...</p>
            <p>
              Click &nbsp;
              <Link to="/" style={{ color: "#dddddd" }}>
                here &nbsp;
              </Link>
              to see list of all movies.
            </p>
          </div>
        </LoadingContainer>
      )}
    </MoviesContainer>
  );
  return isLoading ? <Loading /> : MoviesListData;
};

const mapStateToProps = (state) => ({
  moviesData: getMovies(state),
  isLoading: getLoading(state),
  searchedMovie: getSearchedMovieInfo(state),
  totalPages: getTotalPages(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingMovies: (category, page) => dispatch(loadMovies(category, page)),
  loadMovie: (id) => dispatch(searchByID(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
