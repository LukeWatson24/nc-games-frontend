import { useEffect, useState } from "react";
import { getReviewById } from "../utils/utils";
import styles from "../styles/review.module.scss";
import utils from "../styles/utils.module.scss";
import Vote from "./Vote";

function ReviewInfo({ reviewId, error, setError, loading, setLoading }) {
  const [review, setReview] = useState({});

  useEffect(() => {
    setLoading(true);
    getReviewById(reviewId)
      .then((res) => {
        setReview(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [reviewId, setError, setLoading]);

  if (error)
    return (
      <section className={styles.content}>
        <h1>Review Not found</h1>
      </section>
    );

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
