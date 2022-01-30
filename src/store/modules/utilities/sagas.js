import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import history from '../../../services/history';
import { authUser } from './call';
import { getCEP } from '../utilities/call';

export function* showLoading({ payload }) {
  console.tron(payload);
  // const { email, password, grant_type } = payload;

  // const client_id = 'aVgjhEBcnN-ytRrewsWJrSpoKnh';
  // const client_secret = 'q4fYtRGIkmLJKtx9Y5MaUYFPPdasd2QD4hTI4Gds45tgfSAdlkj';
  // const token = 'Basic ' + btoa(`${client_id}:${client_secret}`);

  // const { accessToken, user } = yield call(authUser, {});

  // yield put({
  //   type: '@auth/SIGN_IN_SUCCESS',
  //   payload: { token: accessToken, user: user.nome },
  // });

  // const { auth } = yield select(state => state);
  // localStorage.setItem('token', auth.token);

  // auth.token !== '' ? history.push('/dashboard') : console.log('ERROR');
}

export function* getCepSaga({ payload }) {
  yield put({
    type: '@utilities/SHOW_LOADING',
    payload: { show: true },
  });

  try {
    const data = yield call(getCEP, { cep: payload.cep });
    yield put({ type: '@utilities/CEP_SUCCESS', payload: { endereco: data } });
  } catch (error) {
  } finally {
    yield put({
      type: '@utilities/SHOW_LOADING',
      payload: { show: false },
    });
  }
}

export default all([takeLatest('@utilities/GET_CEP', getCepSaga)]);
