import { MoviesContainer } from "./styled/styled";

const MovieDetails = ({ match }) => {
  const movieId = match.params.id;
  return <MoviesContainer>You are trying to fetch {movieId}</MoviesContainer>;
};

export default MovieDetails;
