import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../app/store/configureStore';

import Navigator from './navigation';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
