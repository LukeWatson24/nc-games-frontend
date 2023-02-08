import { useContext, useState } from "react";
import { getLoggedInUser, postReviewComment } from "../utils/utils";
import { TokenContext } from "../context/TokenContext";
import styles from "../styles/review.module.scss";

function CommentForm({ reviewId, setComments }) {
  const { token, user, login } = useContext(TokenContext);
  const [sending, setSending] = useState(false);
  const [comment, setComment] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setSending(true);
    getLoggedInUser(token)
      .then(({ username }) =>
        postReviewComment(reviewId, comment, username, token)
      )
      .then(() => setSending(false));
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

  if (login) return <p>Loading user...</p>;
  if (sending) return <div className={styles.sending}>Adding comment...</div>;
  if (token === undefined)
    return <div className={styles.sending}>Login to post a comment</div>;
  return (
    <form onSubmit={(e) => submitHandler(e)} className={styles.form}>
      <img src={user?.avatar_url} alt={user?.username} />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        aria-label="post a comment"
        placeholder="Comment..."
      />
      <button disabled={comment === ""} type="submit">
        <span className={`material-symbols-outlined ${styles.icon}`}>send</span>
      </button>
    </form>
  );
}

export default CommentForm;
