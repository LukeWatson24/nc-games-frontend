import { useEffect, useState } from "react";
import { getReviews } from "../utils/utils";
import styles from "../styles/home.module.scss";
import cardStyles from "../styles/cards.module.scss";
import ReviewTile from "./ReviewTile";

function PopularContainer() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews({ limit: 3, sort_by: "votes", order: "desc" }).then((res) =>
      setReviews(res)
    );
  }, []);
  return (
    <section className={styles.cat_container}>
      <h2>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          folder_open
        </span>{" "}
        Popular Reviews
      </h2>
      <div className={cardStyles.container}>
        {reviews.map((review) => (
          <ReviewTile key={review.review_id} review={review} />
        ))}
      </div>
    </section>
  );
}

export default PopularContainer;
