import { useEffect, useState } from "react";
import { deleteComment, getUser } from "../utils/utils";
import styles from "../styles/review.module.scss";
import utils from "../styles/utils.module.scss";

function Comment({ comment, username, token, setComments }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser(comment.author).then((res) => setUser(res));
  });

  const deleteHandler = () => {
    deleteComment(comment.comment_id, token).then(() => {
      setComments((prev) =>
        prev.filter(({ comment_id }) => comment_id !== comment.comment_id)
      );
    });
  };

  return (
    <div className={styles.single_comment}>
      <div className={styles.top}>
        <div className={styles.user}>
          <img src={user.avatar_url} alt={user.username} />
          <p>{comment.author}</p>
        </div>
        <button
          onClick={deleteHandler}
          className={username === comment.author ? "" : utils.hidden}
        >
          <span className={`material-symbols-outlined ${styles.icon}`}>
            delete
          </span>
        </button>
      </div>
      <p>{comment.body}</p>
    </div>
  );
}
export default Comment;
