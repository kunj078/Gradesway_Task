import axios from 'axios';

// Set backend base URL (adjust if needed)
axios.defaults.baseURL = 'http://localhost:5000';

export const signupUser = (data: { username: string; password: string }) => {
  return axios.post('/api/auth/signup', data, { withCredentials: true });
};

export const loginUser = (data: { username: string; password: string }) => {
  return axios.post('/api/auth/login', data, { withCredentials: true });
};
