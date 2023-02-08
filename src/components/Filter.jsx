import { useEffect, useState } from "react";
import { getCategories } from "../utils/utils";

function Filter({ setParams, params, loading }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);
  return (
    <select
      disabled={loading}
      value={params.get("category") ? params.get("category") : "all"}
      onChange={(e) => setParams({ category: e.target.value })}
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
