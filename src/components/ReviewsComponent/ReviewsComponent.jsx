import StarRating from "./StarRating.jsx";
import s from "./ReviewsComponent.module.css";

const ReviewsComponent = ({ camper }) => {
  const reviews = camper.reviews;

  console.log(reviews);
  return (
    <div className={s.reviewsContainer}>
      <ul className={s.reviewsList}>
        {reviews.map((review, index) => (
          <li key={index} className={s.reviewItem}>
            <div className={s.reviewerInitialBox}>
              <span className={s.userInitial}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </span>
              <div className={s.nameRatingBox}>
                <p className={s.reviewerName}>{review.reviewer_name}</p>
                <StarRating rating={review.reviewer_rating} />
              </div>
            </div>
            <div className={s.reviewContent}>
              <p className={s.reviewComment}>{review.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsComponent;
