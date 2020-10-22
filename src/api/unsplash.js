import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID uFCj27oJdtuQhAetVJUwGFrfnlLrHJxYmwwuZP3wLMA"
  }

}) 