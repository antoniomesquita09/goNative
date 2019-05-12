import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './Pages/Login';
import Repositories from './Pages/Repositories';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Repositories,
  }),
);

export default Routes;
