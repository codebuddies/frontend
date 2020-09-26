import axios from 'axios';

const API_URL = '/api/v1';

const getResource = async (_key, id) => {
  const { data } = await axios.get(`${API_URL}/resources/${id}`);
  return data;
};

const getResources = async searchTerm => {
  const { data } = await axios.get(
    `${API_URL}/resources/?search=${searchTerm}`
  );
  console.log('get resources!!!!!');
  console.log(data);
  return data;
};

export { getResource, getResources };
