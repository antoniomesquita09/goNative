import React from 'react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';

import './config/reactotronConfig';
import './config/StatusBarConfig';
import store from './store';
import Routes from './routes';
import Player from './components/Player';

YellowBox.ignoreWarnings(['Warning: Async Storage']);

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
);

export default App;
