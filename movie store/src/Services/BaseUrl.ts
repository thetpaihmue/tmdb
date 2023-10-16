import axios from "axios";

const BaseUrl = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjJkM2ZkMWIwZjJkMzBiZTI3MzQwNmUxYjNiYjk1YyIsInN1YiI6IjY1MmNiZWViMGNiMzM1MTZmNjNmNWQwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t1LCmp4JO92zQDTSxgQ_9VvF2bBCT8FWbDDQlnhy2ls",
  },
});

export default BaseUrl;
