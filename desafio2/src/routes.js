import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Repositories from './Pages/Repositories';
import Issues from './Pages/Issues';

const Routes = createAppContainer(
  createSwitchNavigator({
    Repositories,
    Issues,
  }),
);

export default Routes;
