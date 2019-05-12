import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import api from '../../Services/api';
import { navigate } from '../../Services/navigation';

import { Creators as LoginActions, Types as LoginTypes } from '../Ducks/Login';
import { Creators as RepositoriesActions, Types as RepositoriesTypes } from '../Ducks/Repositories';

function* login(action) {
  try {
    const { username } = action.payload;
    yield call(api.get, `/users/${username}`);

    yield put(LoginActions.loginSuccess(username));
    navigate('Repositories');
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}

function* loadRepositories() {
  try {
    const { username } = yield select(state => state.login);

    const response = yield call(api.get, `/users/${username}/repos`);

    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data));
  } catch (err) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, login),
    takeLatest(RepositoriesTypes.LOAD_REQUEST, loadRepositories),
  ]);
}
