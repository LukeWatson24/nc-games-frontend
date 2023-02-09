import { useEffect, useState } from "react";
import { getReviews } from "../utils/utils";
import utils from "../styles/utils.module.scss";
import Reviews from "./Reviews";
import Sort from "./Sort";

function ReviewsContainer() {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
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

      return query;
    }
  }, [page, order, sort]);

  function flipHandler(e) {
    e.preventDefault();
    order === "asc" ? setOrder("desc") : setOrder("asc");
  }

  return (
    <main>
      <form onSubmit={(e) => flipHandler(e)}>
        <Sort setSort={setSort} loading={loading} />
        <button disabled={loading} type="submit">
          <span class={`material-symbols-outlined`}>swap_vert</span>
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
