function Sort({ setSort, loading }) {
  return (
    <select
      className=""
      disabled={loading}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="created_at">Date</option>
      <option value="comment_count">Comments</option>
      <option value="votes">Votes</option>
    </select>
  );
}

export default Sort;
