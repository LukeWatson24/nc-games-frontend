import { useContext, useEffect, useState } from "react";
import { getReviewComments } from "../utils/utils";
import styles from "../styles/review.module.scss";
import utils from "../styles/utils.module.scss";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { TokenContext } from "../context/TokenContext";

function ReviewComments({ reviewId }) {
  const { user, token } = useContext(TokenContext);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getReviewComments(reviewId).then((res) => {
      setComments(res);
      setLoading(false);
    });
  }, [reviewId]);

  useEffect(() => {
    if (page === 1) return;
    setLoading(true);
    getReviewComments(reviewId, { p: page }).then((res) => {
      setComments((old) => [...old, ...res]);
      setLoading(false);
    });
  }, [reviewId, page]);

  return (
    <section className={styles.comments}>
      <h2 className={!loading ? "" : utils.hidden}>Comments</h2>
      <p className={loading ? "" : utils.hidden}>Loading...</p>
      <CommentForm reviewId={reviewId} setComments={setComments} />
      <div className={styles.wrapper}>
        {comments.length === 0
          ? "No comments yet..."
          : comments.map((comment) => (
              <Comment
                key={comment.comment_id}
                comment={comment}
                username={user?.username}
                token={token}
                setComments={setComments}
              />
            ))}
      </div>
      <button onClick={() => setPage((prev) => prev + 1)}>LOAD MORE</button>
    </section>
  );
}

export default ReviewComments;
