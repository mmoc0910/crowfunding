const { default: axios } = require("axios");

export default axios.create({
  baseURL: "https://crowfunding-json-server-auth.onrender.com/",
});

export const axiosPrivate = axios.create({
  baseURL: "https://crowfunding-json-server.onrender.com/",
  headers: {
    "Content-Type": "Application/json",
  },
});
