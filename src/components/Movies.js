import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadMovies } from "../thunks/thunks";
import { getLoading, getMovies } from "../selectors/selectors";
import {
  MoviesContainer,
  MovieList,
  MovieItem,
  MovieImg,
} from "./styled/styled";
import Loading from "./Loading";

const Movies = ({ moviesData, isLoading, startLoadingMovies }) => {
  useEffect(() => {
    startLoadingMovies();
  }, [startLoadingMovies]);

  const MoviesList = (
    <MoviesContainer>
      <MovieList>
        {moviesData.map((item) => (
          <MovieItem key={item.id}>
            <Link to={`/movies/${item.id}`}>
              <MovieImg
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
            </Link>
          </MovieItem>
        ))}
      </MovieList>
    </MoviesContainer>
  );

  return isLoading ? <Loading /> : MoviesList;
};

const mapStateToProps = (state) => ({
  moviesData: getMovies(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingMovies: () => dispatch(loadMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
