import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import { Select, MenuItem, Box } from "@material-ui/core";
import { loadMovies, searchByID } from "../thunks/thunks";
import { getLoading, getMovies, getTotalPages } from "../selectors/selectors";
import { MoviesContainer, MoviesFilter } from "./styled/styled";
import Empty from "./Empty";
import Loading from "./Loading";
import MoviesList from "./MoviesList";

const Movies = ({
  moviesData,
  isLoading,
  startLoadingMovies,
  populateState,
  totalPages,
}) => {
  const [filter, setFilter] = useState("popular");
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    populateState(520763);
  }, [populateState]);

  useEffect(() => {
    startLoadingMovies(filter, page);
  }, [startLoadingMovies, filter, page]);

  const handleChange = (e) => {
    setFilter(e.target.value);
    setPage(1);
  };

  const MoviesListData = (
    <MoviesContainer>
      {location.pathname === "/" && (
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
      )}

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
        <Empty />
      )}
    </MoviesContainer>
  );
  return isLoading ? <Loading /> : MoviesListData;
};

const mapStateToProps = (state) => ({
  moviesData: getMovies(state),
  isLoading: getLoading(state),
  totalPages: getTotalPages(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingMovies: (category, page) => dispatch(loadMovies(category, page)),
  populateState: (id) => dispatch(searchByID(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
