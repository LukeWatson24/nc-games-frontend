import styles from "../styles/cards.module.scss";
import placeholder from "../assets/placeholder_profile.png";
import { Link } from "react-router-dom";

function ReviewTile({ review }) {
  return (
    <Link to={`/reviews/${review.review_id}`} className={styles.large_card}>
      <div className={styles.img_container}>
        <img src={review.review_img_url} alt="" />
      </div>
      <div className={styles.content}>
        <p className={styles.tag}>{review.category}</p>
        <h3>{review.title}</h3>
        <div className={styles.owner}>
          <img
            src="http://erer.sjd"
            onError={(e) => (e.target.src = placeholder)}
            alt=""
          />
          <div className={styles.info}>
            <p>{review.owner}</p>
            <p>placeholder date</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ReviewTile;
