import { LoginManager } from 'react-native-fbsdk';

export const facebookLogin = async () => {
  let result;

  try {
    console.tron.log('passed result');
    result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
  } catch (err) {
    throw new Error(err);
  }

  if (result.isCancelled) {
    return { error: 'Usuario cancelou o login!' };
  }

  return false;
};
