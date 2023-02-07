import { useEffect, useState } from "react";
import { getReviews } from "../utils/utils";
import utils from "../styles/utils.module.scss";
import Filter from "./Filter";
import Reviews from "./Reviews";

function ReviewsContainer() {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filter, setfilter] = useState({});

  useEffect(() => {
    setLoading(true);
    getReviews({ limit: 6 * page }).then((res) => {
      setReviews(res);
      setLoading(false);
    });
  }, [page]);

  return (
    <main>
      <Filter />
      <Reviews reviews={reviews} />
      <p className={loading ? "" : utils.hidden}>Loading...</p>
      <button
        className={loading ? utils.hidden : ""}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Load More
      </button>
    </main>
  );
}

export default ReviewsContainer;
