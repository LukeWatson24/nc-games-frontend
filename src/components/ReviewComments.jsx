import { useEffect, useState } from "react";
import { getReviewComments } from "../utils/utils";
import styles from "../styles/review.module.scss";
import utils from "../styles/utils.module.scss";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function ReviewComments({ reviewId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReviewComments(reviewId).then((res) => {
      setComments(res);
      setLoading(false);
    });
  }, []);
  return (
    <section className={styles.comments}>
      <h2 className={!loading ? "" : utils.hidden}>Comments</h2>
      <p className={loading ? "" : utils.hidden}>Loading...</p>
      <div className={styles.wrapper}>
        {comments.length === 0
          ? "No comments yet..."
          : comments.map((comment) => (
              <Comment key={comment.comment_id} comment={comment} />
            ))}
      </div>
      <CommentForm />
    </section>
  );
}

export default ReviewComments;
