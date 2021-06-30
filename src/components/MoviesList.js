import { Link } from "react-router-dom";
import { MovieList, MovieItem, MovieImg } from "./styled/styled";

const MoviesList = ({ moviesData }) => {
  return (
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
  );
};

export default MoviesList;
