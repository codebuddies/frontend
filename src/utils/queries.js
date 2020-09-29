import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

const getResource = async (_key, id) => {
  const { data } = await axios.get(`${API_URL}/resources/${id}`);
  return data;
};

const getResources = async searchTerm => {
  const { data } = await axios.get(`${API_URL}/resources/${searchTerm}`);
  return data;
};

const verifyEmail = async (_key, apiKey) => {
  const { data } = await axios.post(`${API_URL}/registration/verify-email`, {
    key: apiKey,
  });
  return data;
};

export { getResource, getResources, verifyEmail };
