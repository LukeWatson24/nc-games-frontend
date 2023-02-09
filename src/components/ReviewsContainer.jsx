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
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    setLoading(true);
    getReviews(formatQueries()).then((res) => {
      setReviews(res);
      setLoading(false);
    });

    function formatQueries() {
      const query = { limit: 6 * page, sort_by: sort, order };
      if (params.has("category")) {
        const filter = params.get("category");
        if (filter !== "all") {
          query.category = filter;
        }
      }
      return query;
    }
  }, [page, params, setParams, sort, order]);

  function flipHandler(e) {
    e.preventDefault();
    order === "asc" ? setOrder("desc") : setOrder("asc");
  }

  return (
    <main>
      <form className={styles.container} onSubmit={(e) => flipHandler(e)}>
        <Filter setParams={setParams} params={params} loading={loading} />
        <Sort setSort={setSort} loading={loading} />
        <button disabled={loading} type="submit">
          <span className={`material-symbols-outlined ${styles.icon}`}>
            swap_vert
          </span>
        </button>
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
