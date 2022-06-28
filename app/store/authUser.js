import produce from 'immer';

const SET_AUTH_USER = 'SET_AUTH_USER';
const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
const REMOVE_AUTH_TOKEN = 'REMOVE_AUTH_TOKEN';

const initialState = {
  user: null,
  authToken: '',
};

// reducer
export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_AUTH_USER:
        draft.user = action.payload;
        break;
      case SET_AUTH_TOKEN:
        draft.authToken = action.payload;
        break;
      case REMOVE_AUTH_TOKEN:
        draft.authToken = '';
        break;
    }
  });

export const setAuthUser = (user = {}) => ({
  type: SET_AUTH_USER,
  payload: user,
});

export const setAuthTokenAction = (value = '') => ({
  type: SET_AUTH_TOKEN,
  payload: value,
});

export const removeAuthTokenAction = () => ({
  type: REMOVE_AUTH_TOKEN,
});
