import axios from "axios";

const api = axios.create({ baseURL: "https://nc-games-api.onrender.com/api" });

async function getReviews(queries) {
  const { data } = await api.get("/reviews", { params: queries });
  return data.reviews;
}

async function getReviewById(id) {
  const { data } = await api.get("/reviews/" + id);
  return data.review;
}

async function getReviewComments(id) {
  const { data } = await api.get("/reviews/" + id + "/comments");
  return data.comments;
}

async function getUser(username) {
  const { data } = await api.get("/users/" + username);
  return data.user;
}

export { getReviews, getReviewById, getReviewComments, getUser };
