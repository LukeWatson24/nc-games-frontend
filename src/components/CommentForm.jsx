import { useContext, useEffect, useState } from "react";
import { getLoggedInUser, postReviewComment } from "../utils/utils";
import { TokenContext } from "../context/TokenContext";
import styles from "../styles/review.module.scss";

function CommentForm({ reviewId, setComments }) {
  const token = useContext(TokenContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [comment, setComment] = useState("");
  useEffect(() => {
    setLoading(true);
    if (token === undefined) return;
    getLoggedInUser(token).then((res) => {
      setUser(res);
      setLoading(false);
    });
  }, [token]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSending(true);
    postReviewComment(reviewId, comment, user.username, token).then(() =>
      setSending(false)
    );
    setComments((prev) => [
      {
        comment_id: Math.floor(prev.length * Math.random() * 1000), // will be changed
        body: comment,
        author: user.username,
      },
      ...prev,
    ]);
    setComment("");
  };

  if (loading) return <p>Loading user...</p>;
  if (sending) return <div className={styles.sending}>Adding comment...</div>;

  return (
    <form className={styles.form}>
      <img src={user?.avatar_url} alt={user?.username} />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        aria-label="comment"
        placeholder="Comment..."
      />
      <button onClick={(e) => submitHandler(e)}>
        <span className={`material-symbols-outlined ${styles.icon}`}>send</span>
      </button>
    </form>
  );
}

export default CommentForm;
