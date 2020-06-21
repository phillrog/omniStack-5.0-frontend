import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack5-api.herokuapp.com'
});

api.endpoints = {
    tweets: '/api/tweets',
    likes: '/api/likes'
  };

export default api;