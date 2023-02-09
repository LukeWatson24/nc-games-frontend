function Sort({ setSort, loading, setPage }) {
  return (
    <select
      className=""
      disabled={loading}
      aria-label="sort reviews"
      onChange={(e) => {
        setSort(JSON.parse(e.target.value));
        setPage(1);
      }}
    >
      <option value={JSON.stringify({ sort_by: "created_at", order: "desc" })}>
        Newest
      </option>
      <option value={JSON.stringify({ sort_by: "created_at", order: "asc" })}>
        Oldest
      </option>
      <option value={JSON.stringify({ sort_by: "votes", order: "desc" })}>
        Votes high to low
      </option>
      <option value={JSON.stringify({ sort_by: "votes", order: "asc" })}>
        Votes low to high
      </option>
      <option
        value={JSON.stringify({ sort_by: "comment_count", order: "desc" })}
      >
        Comments high to low
      </option>
      <option
        value={JSON.stringify({ sort_by: "comment_count", order: "asc" })}
      >
        Comments low to high
      </option>
    </select>
  );
}

export default Sort;
