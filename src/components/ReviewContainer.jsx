import { useParams } from "react-router-dom";
import styles from "../styles/review.module.scss";
import ReviewComments from "./ReviewComments";
import ReviewInfo from "./ReviewInfo";

function ReviewContainer() {
  const { review_id } = useParams();
  return (
    <main className={styles.review_wrapper}>
      <ReviewInfo reviewId={review_id} />
      <ReviewComments reviewId={review_id} />
    </main>
  );
}

export default ReviewContainer;
