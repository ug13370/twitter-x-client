import fetchApi from "./api";

const apiUrl = process.env.REACT_APP_API_URL;
const headers = {
  "Content-Type": "application/json",
};

export const fetchTimeline = (userId: string) => {
  return fetchApi(`${apiUrl}/my_tweets/${userId}`, "GET", headers);
};
