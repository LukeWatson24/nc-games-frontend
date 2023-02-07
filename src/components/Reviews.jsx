import ReviewTile from "./ReviewTile";
import styles from "../styles/cards.module.scss";

function Reviews({ reviews }) {
  return (
    <section className={styles.container}>
      {reviews.map((review) => (
        <ReviewTile key={review.review_id} review={review} />
      ))}
    </section>
  );
}

export default Reviews;
