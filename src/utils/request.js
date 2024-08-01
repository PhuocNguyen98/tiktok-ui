import axios from 'axios';

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (api, params = {}) => {
  const response = await request.get(api, params);
  return response.data;
};

export default request;
