import { connect } from "react-redux";
import { getWatchlist } from "../selectors/selectors";
import { removeFromWatchlist } from "../actions/actions";
import { MoviesContainer } from "./styled/styled";

const WatchList = ({ watchlist, removeFromWatchlist }) => {
  return (
    <MoviesContainer>
      Watch Later
      {watchlist.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </MoviesContainer>
  );
};

const mapStateToProps = (state) => ({
  watchlist: getWatchlist(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeFromWatchlist: (id) => dispatch(removeFromWatchlist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
