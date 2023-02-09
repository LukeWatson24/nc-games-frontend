import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getReviews } from "../utils/utils";
import styles from "../styles/filter.module.scss";
import utils from "../styles/utils.module.scss";
import Filter from "./Filter";
import Reviews from "./Reviews";

function ReviewsContainer() {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    setLoading(true);

    getReviews(formatQueries()).then((res) => {
      setReviews(res);
      setLoading(false);
    });

    function formatQueries() {
      const query = { limit: 6 * page };
      if (params.has("category")) {
        const filter = params.get("category");
        if (filter !== "all") {
          query.category = filter;
        }
      }
      return query;
    }
  }, [page, params, setParams]);

  return (
    <main>
      <form className={styles.container} onSubmit={(e) => flipHandler(e)}>
        <Filter setParams={setParams} params={params} loading={loading} />
      </form>
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
