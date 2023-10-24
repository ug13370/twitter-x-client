import fetchApi from "./api";

const apiUrl = process.env.REACT_APP_API_URL;
const headers = {
  "Content-Type": "application/json",
};

export const createANewTweet = (payload: any) => {
  return fetchApi(`${apiUrl}/tweet`, "POST", headers, payload);
};

export const fetchTimeline = () => {
  return fetchApi(`${apiUrl}/tweets`, "GET", headers);
};
