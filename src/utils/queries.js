import axios from 'axios';

const API_URL = '/api/v1';

const getResource = async (_key, id) => {
  const { data } = await axios.get(`${API_URL}/resources/${id}`);
  return data;
};

const getResources = async searchTerm => {
  const url =
    searchTerm !== ''
      ? `${API_URL}/resources/?search=${searchTerm}` // Empty '' search term will return 0 results
      : `${API_URL}/resources/`;
  const { data } = await axios.get(url);
  return data;
};

export { getResource, getResources };
