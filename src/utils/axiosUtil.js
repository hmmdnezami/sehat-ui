import axios from 'axios';
import { url } from '../constants';

const getAuthHeader = () => {
  const token = localStorage.getItem('authToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const axiosUtil = axios.create({
  baseURL: `${url}`,
  headers: {
    'Content-Type': 'application/json',
    ...getAuthHeader()
  }
});

export default axiosUtil;