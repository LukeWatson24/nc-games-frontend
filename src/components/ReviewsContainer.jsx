import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getReviews } from "../utils/utils";
import styles from "../styles/filter.module.scss";
import utils from "../styles/utils.module.scss";
import Reviews from "./Reviews";
import Sort from "./Sort";
import Filter from "./Filter";

function ReviewsContainer() {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState({ sort_by: "created_at", order: "desc" });

  useEffect(() => {
    setLoading(true);
    getReviews(formatQueries()).then((res) => {
      if (page === 1) {
        setReviews(res);
      } else {
        setReviews((old) => [...old, ...res]);
      }
      setLoading(false);
    });

    function formatQueries() {
      const query = { limit: 6, p: page, ...sort };
      if (params.has("category")) {
        const filter = params.get("category");
        if (filter !== "all") {
          query.category = filter;
        }
      }
      return query;
    }
  }, [page, params, sort]);

  return (
    <main>
      <form className={styles.container}>
        <Filter setParams={setParams} params={params} loading={loading} />
        <Sort setSort={setSort} loading={loading} />
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
