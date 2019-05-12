import React from 'react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';
import './Config/ReactotronConfig';

import store from './store';

import Routes from './routes';
import { setNavigator } from './Services/navigation';

YellowBox.ignoreWarnings(['Warning: Async Storage']);

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
