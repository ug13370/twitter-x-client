import fetchApi from "./api";

const apiUrl = process.env.REACT_APP_API_URL;
const headers = {
  "Content-Type": "application/json",
};

export const createNewUser = (payload: any) => {
  return fetchApi(`${apiUrl}/user`, "POST", headers, payload);
};

export const loginUser = (payload: any) => {
  return fetchApi(`${apiUrl}/login`, "POST", headers, payload);
};

export const logoutUser = () => {
  return fetchApi(`${apiUrl}/logout`, "POST", headers);
};
