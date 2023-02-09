import axios from "axios";
import jwt_decode from "jwt-decode";

const api = axios.create({ baseURL: "https://nc-games-api.onrender.com/api" });

async function getReviews(queries) {
  const { data } = await api.get("/reviews", { params: queries });
  return data.reviews;
}

async function getReviewById(id) {
  const { data } = await api.get(`/reviews/${id}`);
  return data.review;
}

async function getReviewComments(id, queries) {
  const { data } = await api.get(`/reviews/${id}/comments`, {
    params: queries,
  });
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
  return api.patch(`/reviews/${id}`, { inc_votes }, setTokenHeader(token));
}

async function getLoggedInUser(token) {
  const { username } = jwt_decode(token);
  return await getUser(username);
}

async function postReviewComment(id, body, username, token) {
  const { data } = await api.post(
    `/reviews/${id}/comments`,
    { username, body },
    setTokenHeader(token)
  );

  return data.comment;
}

function setTokenHeader(token) {
  return { headers: { "x-access-token": token } };
}

function deleteComment(id, token) {
  return api.delete(`/comments/${id}`, setTokenHeader(token));
}

export {
  getReviews,
  getReviewById,
  getReviewComments,
  getUser,
  loginUser,
  patchReviewVote,
  getLoggedInUser,
  postReviewComment,
  deleteComment,
};
