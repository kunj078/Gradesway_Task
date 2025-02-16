import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export const createQuiz = (data: { title: string; description: string }) => {
  return axios.post('/api/quizzes', data, { withCredentials: true });
};

export const getQuizzes = () => {
  return axios.get('/api/quizzes', { withCredentials: true });
};

export const getQuizById = (id: string) => {
  return axios.get(`/api/quizzes/${id}`, { withCredentials: true });
};

export const updateQuiz = (id: string, data: { title: string; description: string }) => {
  return axios.put(`/api/quizzes/${id}`, data, { withCredentials: true });
};

export const deleteQuiz = (id: number) => {
  return axios.delete(`/api/quizzes/${id}`, { withCredentials: true });
};
