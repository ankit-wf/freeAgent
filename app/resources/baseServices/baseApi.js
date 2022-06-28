import axios from 'axios';
import {authHeader} from '../../helpers/auth';
import {configureAxiosParams} from '../../helpers/configureAxios';

// Format axios nested params correctly
configureAxiosParams(axios);

export const callApi = async (url, options = {}) => {
  const headers = await authHeader();
  console.log('API_URL========>', url);
  console.log('Parameter', options);
  let response = await axios.request({
    url,
    headers,
    ...options,
  });
  console.log('API_Response ', response.data);
  return response;

  // return axios.request({
  //   url,
  //   headers,
  //   ...options,
  // });
};

export const callApiGet = (url, params = {}) =>
  callApi(url, {
    method: 'GET',
    params,
  });

export const callApiPost = (url, data) =>
  callApi(url, {
    method: 'POST',
    data: data,
  });

export const callApiPut = (url, data = {}) =>
  callApi(url, {
    method: 'PUT',
    data: data,
  });

export const callApiDelete = (url) => callApi(url, {method: 'DELETE'});
