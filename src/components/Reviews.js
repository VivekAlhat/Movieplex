import { connect } from "react-redux";
import { getSearchedMovieReviews } from "../selectors/selectors";
import { ReviewsContainer, ReviewItem } from "./styled/styled";

const Reviews = ({ reviewsData }) => {
  const { results: reviews } = reviewsData;

  return (
    <ReviewsContainer>
      {reviews.length > 0 ? (
        reviews.map(
          (item, index) =>
            index < 3 && (
              <ReviewItem key={item.id}>
                <p>{item.content.substring(0, 500)}...</p>
                <p style={{ fontStyle: "italic" }}>- &nbsp;{item.author}</p>
              </ReviewItem>
            )
        )
      ) : (
        <div style={{ color: "#dddddd" }}>
          <h3>Not Reviewed Yet...</h3>
        </div>
      )}
    </ReviewsContainer>
  );
};

const mapStateToProps = (state) => ({
  reviewsData: getSearchedMovieReviews(state),
});

export default connect(mapStateToProps)(Reviews);
