// api/products.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const addProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/products`, productData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(`${API_URL}/products/${productId}`, productData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct };
