import axios from 'axios';
import { baseApiUrl } from '../../config/environment';

const $api = axios.create({
  baseURL: baseApiUrl,
});

export default $api;
