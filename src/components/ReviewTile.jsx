import styles from "../styles/cards.module.scss";
import placeholder from "../assets/placeholder_profile.png";
import { Link } from "react-router-dom";
import { formatDate, getUser } from "../utils/utils";
import { useEffect, useState } from "react";

function ReviewTile({ review }) {
  const [owner, setOwner] = useState(null);
  useEffect(() => {
    getUser(review.owner).then((res) => setOwner(res));
  }, [review]);
  return (
    <Link to={`/reviews/${review.review_id}`} className={styles.large_card}>
      <div className={styles.img_container}>
        <img src={review.review_img_url} alt="" />
      </div>
      <div className={styles.content}>
        <p className={styles.tag}>{review.category}</p>
        <h2>{review.title}</h2>
        <div className={styles.info_wrapper}>
          <div className={styles.owner}>
            <img
              src={owner === null ? placeholder : owner.avatar_url}
              onError={(e) => (e.target.src = placeholder)}
              alt=""
            />
            <div className={styles.info}>
              <p>{review.owner}</p>
              <p>{formatDate(Date.parse(review.created_at))}</p>
            </div>
          </div>
          <div className={styles.stats}>
            <p>
              {review.votes}
              <span className="material-symbols-outlined">thumb_up</span>
            </p>
            <p>
              {review.comment_count}
              <span className="material-symbols-outlined">comment</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ReviewTile;
