const { default: axios } = require("api/axios");

export const requestAuthRegister = (data) => {
  return axios.post("/auth/register", { ...data });
};

export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", { ...data });
};

export const requestAuthFetchme = (token) => {
  return axios.get("/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
