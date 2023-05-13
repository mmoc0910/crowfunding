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

export const requestRefeshToken = (token) => {
  if (!token) return;
  return axios.post("/token", {
    "Content-Type": "Application/json",
    refreshToken: token,
  });
};

export const requestAuthLogOut = (token) => {
  if (!token) return;
  // const response = axios.post("/token", {
  //   "Content-Type": "Application/json",
  //   refreshToken: token,
  // });
  return axios.delete("/logout", {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
};
