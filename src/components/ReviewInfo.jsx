import { useEffect, useState } from "react";
import { getReviewById } from "../utils/utils";
import styles from "../styles/review.module.scss";
import utils from "../styles/utils.module.scss";
import Vote from "./Vote";

function ReviewInfo({ reviewId }) {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReviewById(reviewId).then((res) => {
      setReview(res);
      setLoading(false);
    });
  }, [reviewId]);

  return (
    <section className={styles.content}>
      <p className={loading ? "" : utils.hidden}>Loading...</p>
      <div>
        <h1>{review.title}</h1>
        <img src={review.review_img_url} alt={review.title} />
        <p>{review.review_body}</p>
      </div>
      {loading ? null : (
        <Vote isReview={true} id={reviewId} votes={review.votes} />
      )}
    </section>
  );
}

export default ReviewInfo;
