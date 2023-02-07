import { useEffect, useState } from "react";
import { getUser } from "../utils/utils";
import styles from "../styles/review.module.scss";

function Comment({ comment }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser(comment.author).then((res) => setUser(res));
  });
  return (
    <div className={styles.single_comment}>
      <div className={styles.user}>
        <img src={user.avatar_url} alt={user.username} />
        <p>{comment.author}</p>
      </div>
      <p>{comment.body}</p>
    </div>
  );
}
export default Comment;
