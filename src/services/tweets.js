import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack5-api.herokuapp.com/api'
});

api.endpoints = {
    tweets: 'tweets',
    likes: 'likes'
  };

export default api;