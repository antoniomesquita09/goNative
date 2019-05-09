import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure().connect();

  tron.clear();

  console.tron = tron;
}
