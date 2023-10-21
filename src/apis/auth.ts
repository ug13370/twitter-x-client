import fetchApi from "./api";

const apiUrl = "https://twitterx-server-utkarsh.onrender.com";
// const apiUrl = "http://localhost:4000";
const headers = {
  "Content-Type": "application/json",
};

export const createNewUser = (payload: any) => {
  return fetchApi(`${apiUrl}/user`, "POST", headers, payload);
};
