import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { removeFromFavorites, removeFromWatchlist } from "../actions/actions";
import { getFavorites, getWatchlist } from "../selectors/selectors";
import {
  MoviesContainer,
  UserCollection,
  MovieImgContainer,
  MovieList,
} from "./styled/styled";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const MovieCollectionItem = styled(MovieImgContainer)`
  border: 1px solid #dddddd1a;
  padding: 1rem;
  align-items: center;
`;

const UserLists = ({
  favorites,
  watchlist,
  removeFromFavorites,
  removeFromWatchlist,
}) => {
  const location = useLocation();

  const collection = location.pathname === "/favorites" ? favorites : watchlist;

  return (
    <MoviesContainer>
      <UserCollection>
        <MovieList>
          {collection.map((item) => (
            <MovieCollectionItem key={item.id}>
              <Link to={`/movies/${item.id}`}>
                <img
                  style={{ width: "14rem" }}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                />
              </Link>
              <p style={{ textAlign: "center" }}>{item.title}</p>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Delete />}
                size="small"
                onClick={() => {
                  location.pathname === "/favorites"
                    ? removeFromFavorites(item.id)
                    : removeFromWatchlist(item.id);
                }}
              >
                Remove
              </Button>
            </MovieCollectionItem>
          ))}
        </MovieList>
      </UserCollection>
    </MoviesContainer>
  );
};

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
  watchlist: getWatchlist(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
  removeFromWatchlist: (id) => dispatch(removeFromWatchlist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLists);
