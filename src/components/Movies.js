import Spinner from "react-spinkit";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadMovies } from "../thunks/thunks";
import { getLoading, getMovies } from "../selectors/selectors";
import {
  MoviesContainer,
  LoadingContainer,
  MovieList,
  MovieItem,
  MovieImg,
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
      <MovieList>
        {moviesData.map((item) => (
          <Link to={`/movies/${item.id}`} key={item.id}>
            <MovieItem>
              <MovieImg
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
            </MovieItem>
          </Link>
        ))}
      </MovieList>
    </MoviesContainer>
  );

  return isLoading ? Loading : MoviesList;
};

const mapStateToProps = (state) => ({
  moviesData: getMovies(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingMovies: () => dispatch(loadMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
