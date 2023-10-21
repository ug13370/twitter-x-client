import fetchApi from "./api";

const apiUrl = "https://twitterx-server-utkarsh.onrender.com";
// const apiUrl = "http://localhost:4000";
const headers = {
  "Content-Type": "application/json",
  // "Access-Control-Allow-Origin": "*",
  // "Access-Control-Allow-Credentials": true,
};

export const createNewUser = (payload: any) => {
  return fetchApi(`${apiUrl}/user`, "POST", headers, payload);
};

export const loginUser = (payload: any) => {
  return fetchApi(`${apiUrl}/login`, "POST", headers, payload);
};
