import axios from 'axios';

export default params => axios.get('/user/login', {
  params,
});
