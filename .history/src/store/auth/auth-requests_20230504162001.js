const { default: axios } = require("api/axios");

export const requestAuthRegister = (data) => {
  axios.post("/auth/register", { data });
};
