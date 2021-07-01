import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadMovies, searchByID } from "../thunks/thunks";
import { getLoading, getMovies } from "../selectors/selectors";
import { MoviesContainer, LoadingContainer } from "./styled/styled";
import Loading from "./Loading";
import MoviesList from "./MoviesList";

const Movies = ({ moviesData, isLoading, startLoadingMovies, loadMovie }) => {
  useEffect(() => {
    startLoadingMovies();
    loadMovie(527063);
  }, [startLoadingMovies, loadMovie]);

  const MoviesListData = (
    <MoviesContainer>
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
