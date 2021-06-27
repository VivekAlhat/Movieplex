import Spinner from "react-spinkit";
import { useEffect } from "react";
import { connect } from "react-redux";
import { loadMovies } from "../thunks/thunks";
import {
  MoviesContainer,
  LoadingContainer,
  MoviesTitle,
} from "./styled/styled";

const Movies = ({ moviesData, isLoading, startLoadingMovies }) => {
  useEffect(() => {
    startLoadingMovies();
  }, [startLoadingMovies]);

  const Loading = (
    <LoadingContainer>
      <Spinner name="ball-scale-multiple" color="white" />
    </LoadingContainer>
  );

  const MoviesList = (
    <MoviesContainer>
      <MoviesTitle>Popular</MoviesTitle>
    </MoviesContainer>
  );

  return isLoading ? Loading : MoviesList;
};

const mapStateToProps = (state) => ({
  moviesData: state.movies,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingMovies: () => dispatch(loadMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
