import { useEffect } from "react";
import { connect } from "react-redux";
import { searchByID } from "../thunks/thunks";
import { getSearchedMovie, getLoading } from "../selectors/selectors";
import { MoviesContainer, MovieInfo, MovieContent } from "./styled/styled";
import Loading from "./Loading";

const MovieDetails = ({ match, loadMovie, movieData, isLoading }) => {
  const movieId = match.params.id;
  useEffect(() => {
    loadMovie(movieId);
  }, [loadMovie, movieId]);

  const Movie = (
    <MoviesContainer>
      <MovieInfo>
        <div>
          <img
            style={{ width: "17rem" }}
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            alt={movieData.title}
          />
        </div>
        <MovieContent>
          <h1>{movieData.title}</h1>
          <p>{movieData.overview}</p>
        </MovieContent>
      </MovieInfo>
    </MoviesContainer>
  );

  return isLoading ? <Loading /> : Movie;
};

const mapStateToProps = (state) => ({
  movieData: getSearchedMovie(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMovie: (id) => dispatch(searchByID(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
