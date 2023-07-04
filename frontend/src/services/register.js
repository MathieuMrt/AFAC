import axios from "axios";

function register(credentials) {
  return axios
    .post("/utilisateurs", credentials)
    .then((res) => console.log(res));
}

export default {
  register,
};
