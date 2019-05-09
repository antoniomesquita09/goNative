import React from 'react';
import { YellowBox } from 'react-native';
import './Config/ReactotronConfig';

import Routes from './routes';

YellowBox.ignoreWarnings(['Warning: Async']);

const App = () => <Routes />;

export default App;
