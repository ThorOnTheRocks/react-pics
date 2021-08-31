import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      'Client-ID tbro_etEscnD4gnLxJLSaj-DIz6eBWVdrX6-Na1maQ0'
  }
});