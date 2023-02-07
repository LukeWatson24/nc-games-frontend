import { useContext, useState } from "react";
import { TokenContext } from "../context/TokenContext";
import styles from "../styles/votes.module.scss";
import { patchReviewVote } from "../utils/utils";
import ErrorMessage from "./ErrorMessage";

function Vote({ isReview, id, votes }) {
  const [reviewVotes, setReviewVotes] = useState(votes);
  const [error, setError] = useState(null);
  const token = useContext(TokenContext);
  const voteHandler = (inc) => {
    setReviewVotes((prev) => prev + inc);
    if (isReview) {
      patchReviewVote(id, inc, token).catch(({ response }) => {
        setError(response.status);
        setReviewVotes((prev) => prev - inc);
      });
    }
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
      <ErrorMessage
        code={error}
        action={"vote on reviews"}
        setError={setError}
      />
    </div>
  );
}

export default Vote;
