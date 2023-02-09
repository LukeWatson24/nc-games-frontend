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

async function getCategories() {
  const { data } = await api.get("/categories");
  return data.categories;
}

function deleteComment(id, token) {
  return api.delete(`/comments/${id}`, setTokenHeader(token));
}

function formatDate(dateS) {
  const timeNow = new Date().getTime();

  const seconds = (timeNow - dateS) / 1000;
  if (seconds < 60) {
    return `Less than a minute ago`;
  }
  const minutes = seconds / 60;
  const roundedMins = Math.floor(minutes);
  if (minutes < 60)
    return roundedMins === 1 ? "1 minute ago" : `${roundedMins} minutes ago`;
  const hours = minutes / 60;
  const roundedHours = Math.floor(hours);
  if (hours < 24)
    return roundedHours === 1 ? "1 hour ago" : `${roundedHours} hours ago`;
  const days = hours / 24;
  const roundedDays = Math.floor(days);
  if (days < 365)
    return roundedDays === 1 ? "1 day ago" : `${roundedDays} days ago`;
  return Math.floor(days / 365) === 1
    ? "1 year ago"
    : `${Math.floor(days / 365)} years ago`;
}

function postUser(details) {
  return api.post("/users", details);
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
  getCategories,
  deleteComment,
  formatDate,
  postUser,
};
