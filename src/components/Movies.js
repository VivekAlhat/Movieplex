import { useEffect } from "react";
import { connect } from "react-redux";
import { loadMovies, searchByID } from "../thunks/thunks";
import { getLoading, getMovies } from "../selectors/selectors";
import { MoviesContainer } from "./styled/styled";
import Loading from "./Loading";
import MoviesList from "./MoviesList";

const Movies = ({ moviesData, isLoading, startLoadingMovies, loadMovie }) => {
  useEffect(() => {
    startLoadingMovies();
    loadMovie(527063);
  }, [startLoadingMovies,loadMovie]);

  const MoviesListData = (
    <MoviesContainer>
      <MoviesList moviesData={moviesData} />
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
