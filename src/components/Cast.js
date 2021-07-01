import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";
import { getSearchedMovieCast } from "../selectors/selectors";
import { CastContainer, CastInfo, CastItem } from "./styled/styled";

const Cast = ({ movieCast }) => {
  const { cast } = movieCast;
  return (
    <CastContainer>
      <CastInfo>
        {cast.map(
          (item) =>
            item.profile_path !== null && (
              <CastItem key={item.id}>
                <Avatar
                  alt={item.character}
                  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                  style={{ width: "5rem", height: "5rem" }}
                />
                <h3>{item.original_name}</h3>
                <p>{item.character}</p>
              </CastItem>
            )
        )}
      </CastInfo>
    </CastContainer>
  );
};

const mapStateToProps = (state) => ({
  movieCast: getSearchedMovieCast(state),
});

export default connect(mapStateToProps)(Cast);
