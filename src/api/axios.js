import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "fa6b906f3d90ea2e6af87821b60685cd",
    language: "ko-KR",
  },
});

export default instance;
