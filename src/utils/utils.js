import axios from "axios";
import jwt_decode from "jwt-decode";

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

async function loginUser(userInfo) {
  const { data } = await api.post("/users/login", userInfo);
  const { token } = data;
  return token;
}

function patchReviewVote(id, inc_votes, token) {
  api.patch(
    "/reviews/" + id,
    { inc_votes },
    { headers: { "x-access-token": token } }
  );
}

export {
  getReviews,
  getReviewById,
  getReviewComments,
  getUser,
  loginUser,
  jwt_decode,
  patchReviewVote,
};
