import axios from "axios";

const api = axios.create({ baseURL: "https://nc-games-api.onrender.com/api" });

async function getReviews(queries) {
  const { data } = await api.get("/reviews", { params: queries });
  return data.reviews;
}

export { getReviews };
