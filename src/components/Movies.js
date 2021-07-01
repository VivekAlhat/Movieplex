import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { loadMovies, searchByID } from "../thunks/thunks";
import { getLoading, getMovies } from "../selectors/selectors";
import {
  MoviesContainer,
  LoadingContainer,
  MoviesFilter,
} from "./styled/styled";
import Loading from "./Loading";
import MoviesList from "./MoviesList";

const Movies = ({ moviesData, isLoading, startLoadingMovies, loadMovie }) => {
  const [filter, setFilter] = useState("popular");

  useEffect(() => {
    startLoadingMovies();
    loadMovie(527063);
  }, [startLoadingMovies, loadMovie]);

  const handleChange = (e) => {
    setFilter(e.target.value);
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
          <MenuItem value={"latest"}>Latest</MenuItem>
          <MenuItem value={"nowplaying"}>Now Playing</MenuItem>
          <MenuItem value={"popular"}>Popular</MenuItem>
          <MenuItem value={"toprated"}>Top Rated</MenuItem>
          <MenuItem value={"upcoming"}>Upcoming</MenuItem>
        </Select>
      </MoviesFilter>
      {moviesData.length > 0 ? (
        <MoviesList moviesData={moviesData} />
      ) : (
        <LoadingContainer>
          <div style={{ color: "#dddddd", textAlign: "center" }}>
            <p>Ah! So empty ... Please search again for new movie ..</p>
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
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingMovies: () => dispatch(loadMovies()),
  loadMovie: (id) => dispatch(searchByID(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
