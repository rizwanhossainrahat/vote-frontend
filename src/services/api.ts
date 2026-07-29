import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vote-backend-fn18.onrender.com',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Pass 404 responses through so callers can inspect response.data
    if (error.response?.status === 404) {
      return Promise.resolve(error.response);
    }
    const message =
      error.response?.data?.message ?? error.message ?? 'Something went wrong';
    return Promise.reject(new Error(message));
  }
);

export default api;
