import { useEffect } from "react";
import { connect } from "react-redux";
import { Tooltip, Divider } from "@material-ui/core";
import { searchByID } from "../thunks/thunks";
import { getSearchedMovieInfo, getLoading } from "../selectors/selectors";
import {
  MoviesContainer,
  MovieImgContainer,
  MovieActionsIcons,
  MovieInfo,
  MovieContent,
  TagsContainer,
  Genre,
  Language,
  Company,
} from "./styled/styled";
import { AddCircle, FavoriteBorder, Favorite } from "@material-ui/icons";
import { CircularProgressbar } from "react-circular-progressbar";
import Cast from "./Cast";
import styled from "styled-components";
import Loading from "./Loading";

const LineDivider = styled(Divider)`
  margin: 1rem 0 !important;
  border: 1px solid #dddddd1a !important;
`;

const MovieDetails = ({ match, loadMovie, movieData, isLoading }) => {
  const movieId = match.params.id;

  useEffect(() => {
    loadMovie(movieId);
  }, [loadMovie, movieId]);

  const Movie = (
    <MoviesContainer>
      <MovieInfo>
        <MovieImgContainer>
          {movieData.poster_path && (
            <img
              style={{ width: "17rem" }}
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
              alt={movieData.title}
            />
          )}
          <MovieActionsIcons>
            <div style={{ width: 40, height: 40 }}>
              <CircularProgressbar
                value={movieData.vote_average}
                maxValue={10}
                text={`${movieData.vote_average}%`}
              />
            </div>
            <Tooltip title="Unlike">
              <Favorite style={{ cursor: "pointer" }} aria-label="Unlike" />
            </Tooltip>

            <Tooltip title="Add To Watchlist">
              <AddCircle
                style={{ cursor: "pointer" }}
                aria-label="Add To Watchlist"
              />
            </Tooltip>

            <Tooltip title="Like">
              <FavoriteBorder style={{ cursor: "pointer" }} aria-label="Like" />
            </Tooltip>
          </MovieActionsIcons>
        </MovieImgContainer>
        <MovieContent>
          <h1>{movieData.title}</h1>
          {movieData.tagline && <p>{movieData.tagline}</p>}
          {movieData.overview && <p>{movieData.overview}</p>}
          <TagsContainer>
            Genres :
            {movieData.genres.map((item, key) => (
              <Genre key={key}>{item.name}</Genre>
            ))}
          </TagsContainer>
          {movieData.release_date && (
            <p>
              Release Date :&nbsp;
              <span>
                {new Date(movieData.release_date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
          )}
          <p>Status : {movieData.status}</p>
          <TagsContainer>
            Languages :
            {movieData.spoken_languages.map((item, key) => (
              <Language key={key}>{item.english_name}</Language>
            ))}
          </TagsContainer>
          <TagsContainer>
            Production Companies :
            {movieData.production_companies.map((item) => (
              <Company key={item.id}>{item.name}</Company>
            ))}
          </TagsContainer>
        </MovieContent>
      </MovieInfo>
      <LineDivider />
      <Cast />
      <LineDivider />
    </MoviesContainer>
  );

  return isLoading ? <Loading /> : Movie;
};

const mapStateToProps = (state) => ({
  movieData: getSearchedMovieInfo(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMovie: (id) => dispatch(searchByID(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
