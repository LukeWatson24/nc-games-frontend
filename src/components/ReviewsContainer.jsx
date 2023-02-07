import { useEffect, useState } from "react";
import { getReviews } from "../utils/utils";
import Filter from "./Filter";
import Reviews from "./Reviews";

function ReviewsContainer() {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setfilter] = useState({});

  useEffect(() => {
    getReviews({ limit: 6 * page }).then((res) => setReviews(res));
  }, [page]);

  return (
    <main>
      <Filter />
      <Reviews reviews={reviews} />
      <button onClick={() => setPage((prev) => prev + 1)}>Load More</button>
    </main>
  );
}

export default ReviewsContainer;
