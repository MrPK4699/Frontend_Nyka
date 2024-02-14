// api/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const register = async (userData) => {
  try {
    console.log(userData);
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { register, login };
