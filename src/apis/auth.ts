import fetchApi from "./api";

const apiUrl = process.env.REACT_APP_API_URL;
const headers = {
  "Content-Type": "application/json",
};

export const createNewUser = (payload: any) => {
  return fetchApi(`${apiUrl}/user`, "POST", headers, payload);
};

export const loginUser = (payload: any) => {
  console.log(process.env);
  return fetchApi(`${apiUrl}/login`, "POST", headers, payload);
};
