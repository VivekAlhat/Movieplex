import { connect } from "react-redux";
import { getSearchedMovieSimilar } from "../selectors/selectors";
import MoviesList from "./MoviesList";

const Similar = ({ similarMovies }) => {
  const { results } = similarMovies;
  const similar = results.slice(0, 4);

  return similar.length > 0 ? (
    <>
      <h2
        style={{ color: "#dddddd", textAlign: "center", marginBottom: "1rem" }}
      >
        You May Also Like
      </h2>
      <MoviesList moviesData={similar} />
    </>
  ) : null;
};

const mapStateToProps = (state) => ({
  similarMovies: getSearchedMovieSimilar(state),
});

export default connect(mapStateToProps)(Similar);
