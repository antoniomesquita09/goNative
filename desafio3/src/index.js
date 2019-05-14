import React from 'react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';

import './Config/ReactotronConfig';

import Routes from './routes';
import store from './Store';

YellowBox.ignoreWarnings(['Warning: Async Storage']);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
