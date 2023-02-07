import { useContext, useState } from "react";
import { TokenContext } from "../context/TokenContext";
import styles from "../styles/votes.module.scss";
import { patchReviewVote } from "../utils/utils";

function Vote({ isReview, id, votes }) {
  const [reviewVotes, setReviewVotes] = useState(votes);
  const token = useContext(TokenContext);
  const voteHandler = (inc) => {
    if (isReview) {
      patchReviewVote(id, inc, token);
    }
    setReviewVotes((prev) => prev + inc);
  };
  return (
    <div className={styles.container}>
      <button onClick={() => voteHandler(1)}>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          thumb_up
        </span>
      </button>
      <p>{reviewVotes}</p>
      <button onClick={() => voteHandler(-1)}>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          thumb_down
        </span>
      </button>
    </div>
  );
}

export default Vote;
