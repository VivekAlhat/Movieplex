import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchByID } from "../thunks/thunks";
import { Tooltip, Divider } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import { CircularProgressbar } from "react-circular-progressbar";
import { getSearchedMovieInfo, getLoading } from "../selectors/selectors";
import {
  addToWatchlist,
  removeFromWatchlist,
  addToFavorites,
  removeFromFavorites,
} from "../actions/actions";
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
import {
  AddCircle,
  AddCircleOutline,
  FavoriteBorder,
  Favorite,
} from "@material-ui/icons";
import Cast from "./Cast";
import Loading from "./Loading";
import Reviews from "./Reviews";
import Similar from "./Similar";
import styled from "styled-components";

const LineDivider = styled(Divider)`
  margin: 1rem 0 !important;
  border: 1px solid #dddddd1a !important;
`;

const MovieDetails = ({
  match,
  loadMovie,
  movieData,
  isLoading,
  addToWatchlist,
  removeFromWatchlist,
  addToFavorites,
  removeFromFavorites,
}) => {
  const movieId = match.params.id;
  const [isLiked, setIsLiked] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  const addNotify = () => toast.dark("Added to your Watch-List!");
  const delNotify = () => toast.dark("Removed from your Watch-List");
  const liked = () => toast.dark("Added to liked movies");
  const disliked = () => toast.dark("Removed from liked movies");

  useEffect(() => {
    loadMovie(movieId);
  }, [loadMovie, movieId]);

  const Movie = (
    <MoviesContainer>
      <ToastContainer />
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

            {isLiked ? (
              <Tooltip
                title="Unlike"
                onClick={() => {
                  removeFromFavorites(movieData.id);
                  disliked();
                  setIsLiked(false);
                }}
              >
                <Favorite style={{ cursor: "pointer" }} aria-label="Unlike" />
              </Tooltip>
            ) : (
              <Tooltip
                title="Like"
                onClick={() => {
                  addToFavorites(movieData.id);
                  liked();
                  setIsLiked(true);
                }}
              >
                <FavoriteBorder
                  style={{ cursor: "pointer" }}
                  aria-label="Like"
                />
              </Tooltip>
            )}

            {isInWatchlist ? (
              <Tooltip
                title="Remove From Watchlist"
                onClick={() => {
                  removeFromWatchlist(movieData.id);
                  delNotify();
                  setIsInWatchlist(false);
                }}
              >
                <AddCircle
                  style={{ cursor: "pointer" }}
                  aria-label="Remove From Watchlist"
                />
              </Tooltip>
            ) : (
              <Tooltip
                title="Add To Watchlist"
                onClick={() => {
                  addToWatchlist(movieData.id);
                  addNotify();
                  setIsInWatchlist(true);
                }}
              >
                <AddCircleOutline
                  style={{ cursor: "pointer" }}
                  aria-label="Add To Watchlist"
                />
              </Tooltip>
            )}
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
      <Reviews />
      <LineDivider />
      <Similar />
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
  addToWatchlist: (id) => dispatch(addToWatchlist(id)),
  removeFromWatchlist: (id) => dispatch(removeFromWatchlist(id)),
  addToFavorites: (id) => dispatch(addToFavorites(id)),
  removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
