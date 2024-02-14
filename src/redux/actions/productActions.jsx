// redux/actions/productActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts as getAllProductsAPI, getProductById as getProductByIdAPI, addProduct as addProductAPI, updateProduct as updateProductAPI, deleteProduct as deleteProductAPI } from '../../api/products';

export const getAllProducts = createAsyncThunk('products/getAllProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await getAllProductsAPI();
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getProductById = createAsyncThunk('products/getProductById', async (productId, { rejectWithValue }) => {
  try {
    const response = await getProductByIdAPI(productId);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addProduct = createAsyncThunk('products/addProduct', async (productData, { rejectWithValue }) => {
  try {
    const response = await addProductAPI(productData);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const updateProduct = createAsyncThunk('products/updateProduct', async ({ productId, productData }, { rejectWithValue }) => {
  try {
    const response = await updateProductAPI(productId, productData);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId, { rejectWithValue }) => {
  try {
    const response = await deleteProductAPI(productId);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});
