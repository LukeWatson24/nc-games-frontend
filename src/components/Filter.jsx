import { useEffect, useState } from "react";
import { getCategories } from "../utils/utils";

function Filter({ setParams, params, loading, setPage }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);
  return (
    <select
      disabled={loading}
      aria-label="filter by category"
      value={params.get("category") ? params.get("category") : "all"}
      onChange={(e) => {
        setParams({ category: e.target.value });
        setPage(1);
      }}
    >
      <option value="all">Filter</option>
      {categories.map(({ slug }) => (
        <option key={slug} value={slug}>
          {slug}
        </option>
      ))}
    </select>
  );
}

export default Filter;
