import axios from "axios";

let handleLogin = (email, password) => {
  return axios.post(`http://localhost:8888/api/login`, {
    email,
    password,
  });
};
export { handleLogin };
