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

const registerUser = async (_key, user) => {
  const { username, password1, email, password2 } = user;
  const { data } = await axios.post(`${API_URL}/auth/registration`, {
    username,
    email,
    password1,
    password2,
  });
  return data;
};

const verifyEmail = async (_key, apiKey) => {
  const { data } = await axios.post(
    `${API_URL}/auth/registration/verify-email`,
    {
      key: apiKey,
    }
  );
  return data;
};

export { getResource, verifyEmail, registerUser };
