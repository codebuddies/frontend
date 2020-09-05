import axios from 'axios';

const API_URL = 'https://localhost:8000/api/v1';

const getResource = async (_key, id) => {
  const { data } = await axios.get(`${API_URL}/resources/${id}`);
  return data;
};

const postResource = async (data, auth) => {
  console.log('post resource');
  console.log(auth);
  console.log(data);
  const { response } = await axios.post(`${API_URL}/resources`, data, {
    headers: { Authorization: `Bearer ${auth.authTokens.token}` },
  });
  return response;
};

export { getResource, postResource };
