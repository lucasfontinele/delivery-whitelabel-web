import axios from 'axios';

export const googleService = axios.create({
  headers: {
    Accept: 'application/json',
  },
  baseURL: 'https://maps.googleapis.com/maps/api',
});
