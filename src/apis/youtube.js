import axios from "axios";

const KEY = "AIzaSyDVfeUxsJzp8Vs0xnFGlhC2zrllcqbC4zc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
