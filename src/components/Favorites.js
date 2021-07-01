import { connect } from "react-redux";
import { removeFromFavorites } from "../actions/actions";
import { getFavorites } from "../selectors/selectors";
import { MoviesContainer } from "./styled/styled";

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <MoviesContainer>
      Favorites
      {favorites.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </MoviesContainer>
  );
};

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
