const { default: axios } = require("axios");

export default axios.create({
  baseURL: "http://localhost:5000",
});

export const axiosPrivate = () => {
  return axios.create({
    baseURL: "http://localhost:4001",
    headers: {
      "Content-Type": "Application/json",
    },
  });
};
