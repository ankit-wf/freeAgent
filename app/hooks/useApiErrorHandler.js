import {useDispatch} from 'react-redux';
import {notify} from '../store/notifications';

import {
  ERROR_BAD_REQUEST,
  ERROR_NETWORK_ERROR,
  ERROR_UNEXPECTED,
} from '../constants/errors';
import {removeAuthToken} from '../helpers/auth';

const useApiErrorsHandler = () => {
  const dispatch = useDispatch();

  return (error = {}) => {
    if (error.response) {
      const {status} = error.response;
      // handle http status codes
      switch (status) {
        case 400:
          console.log('400 :bad_request');
          dispatch(notify({title: ERROR_BAD_REQUEST, type: 'warning'}));
          break;
        case 401:
          // TODO: Getting 401 for invalid email id/password too and May be we'll get the same for the token expiration.
          console.log('401 :unauthorized');
          dispatch(
            notify({
              title: 'Error',
              message: error.response.data.msg,
              type: 'warning',
            }),
          );
          removeAuthToken();
          break;
        case 403:
          console.log('403 :forbidden');
          dispatch(notify({title: 'Not allowed', type: 'warning'}));
          break;
        case 404:
          console.log('404 :not_found');
          dispatch(notify({title: 'Not found', type: 'warning'}));
          break;
        case 422:
          // TODO: Need to update message key from the backend.
          console.log('422 :unprocessable_entity');
          dispatch(notify({title: error.response.data.msg, type: 'warning'}));
          break;
        case 429:
          console.log('429 :too_many_requests');
          dispatch(notify({title: 'Too Many Requests', type: 'warning'}));
          break;
        case 500:
          console.log('500 :internal_server_error');
          dispatch(
            notify({
              title: 'Internal server error',
              message: 'Please wait and try again later',
              type: 'warning',
            }),
          );
          break;
        default:
          console.log('Response Error');
          dispatch(notify({title: ERROR_UNEXPECTED, type: 'warning'}));
          break;
      }
    } else if (error.request) {
      console.log('Network error');
      dispatch(notify({title: ERROR_NETWORK_ERROR, type: 'warning'}));
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('unrepentant_error');
      dispatch(notify({title: ERROR_UNEXPECTED, type: 'warning'}));
    }
    // log error into console
    console.log(error);
  };
};

export default useApiErrorsHandler;
