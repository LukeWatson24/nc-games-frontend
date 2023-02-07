import { useEffect, useState } from "react";
import { getReviewById } from "../utils/utils";
import styles from "../styles/review.module.scss";
import utils from "../styles/utils.module.scss";

function ReviewInfo({ reviewId }) {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReviewById(reviewId).then((res) => {
      setReview(res);
      setLoading(false);
    });
  }, []);

  return (
    <section className={styles.content}>
      <p className={loading ? "" : utils.hidden}>Loading...</p>
      <div>
        <h1>{review.title}</h1>
        <img src={review.review_img_url} alt={review.title} />
        <p>{review.review_body}</p>
      </div>
    </section>
  );
}

export default ReviewInfo;
