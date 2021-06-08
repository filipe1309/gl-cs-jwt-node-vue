import axios from 'axios';

// Back of Front
export default () => axios.create({
  baseURL: 'localhost:8080/api/v1',
});
