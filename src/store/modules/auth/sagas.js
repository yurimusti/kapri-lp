import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import history from '../../../services/history';
import { authUser, createUser } from './call';
import { notification } from 'antd';

export function* signIn({ payload }) {
  const { email, password, grant_type } = payload;

  yield put({
    type: '@utilities/SHOW_LOADING',
    payload: { show: true },
  });

  try {
    const { accessToken, user } = yield call(authUser, payload);
    yield put({
      type: '@auth/SIGN_IN_SUCCESS',
      payload: { token: accessToken, user: user },
    });

    console.log(accessToken, user);

    if (accessToken !== '') {
      // if (auth.user.password_provisory === true) {
      //   localStorage.setItem('token_aux', accessToken);
      //   history.push('/changePassword');
      // } else {

      //ADMIN
      if (user.roles.admin === true) {
        localStorage.setItem('token', accessToken);
        history.push('/catalogo');
      }

      //GVD
      if (user.roles.gvd === true) {
        localStorage.setItem('token', accessToken);
        if (user.passwordProvisory === true) {
          history.push('/changePassword');
        } else {
          history.push('/catalogo');
        }
      }

      //CONSULTANT
      if (user.roles.consultant === true) {
        if (user.status === true) {
          localStorage.setItem('token', accessToken);
          if (user.endereco === undefined) {
            history.push('/changeEndereco');
          } else {
            history.push('/catalogo');
          }
        } else {
          notification.warn({
            message: 'Aviso',
            description: 'Usuário sem acesso.',
          });
        }
      }

      //D2C
      if (user.roles.d2c === true) {
        localStorage.setItem('token', accessToken);
        if (user.endereco === undefined) {
          history.push('/changeEndereco');
        } else {
          history.push('/');
        }
      }
    }

    //USER
    if (user.roles.d2c === true) {
      if (user.status === true) {
        localStorage.setItem('token', accessToken);
        if (user.endereco === undefined) {
          history.push('/changeEndereco');
        }
      } else {
        notification.warn({
          message: 'Aviso',
          description: 'Usuário sem acesso.',
        });
      }
    }

    yield put({
      type: '@utilities/SHOW_LOADING',
      payload: { show: false },
    });
  } catch (e) {
    e.response.data.msg ===
      'Invalid client: cannot retrieve client credentials' ||
      e.response.data.msg ===
        'Invalid client: cannot retrieve client credentials' ||
      (e.response.data.msg === 'Invalid grant: user credentials are invalid' &&
        notification.warn({
          message: 'Aviso',
          description: 'Email ou senha incorretos.',
        }));

    e.response.data.message ===
      'Usuário bloqueado entrar em contato com o GVD.' &&
      notification.warn({
        message: 'Aviso',
        description: 'Usuário bloqueado entrar em contato com o GVD.',
      });

    console.log('error', e);

    yield put({
      type: '@utilities/SHOW_LOADING',
      payload: { show: false },
    });
  }

  yield put({
    type: '@utilities/SHOW_LOADING',
    payload: { show: false },
  });
}

export function* changePasswordSaga({ payload }) {
  yield put({
    type: '@utilities/SHOW_LOADING',
    payload: { show: true },
  });

  try {
    // const params = yield call(changePasswordInitial, payload);
    // if (params.message === 'updated!') {
    //   history.push('/changeEndereco');
    //   notification.success({
    //     message: 'Sucesso',
    //     description: 'Senha alterada com sucesso.',
    //   });
    // }
  } catch (e) {
    notification.error({
      message: 'Error',
      description: 'Algo de errado aconteceu.',
    });
  }

  yield put({
    type: '@utilities/SHOW_LOADING',
    payload: { show: false },
  });
}

export function* loginUserSaga({ payload }) {
  yield put({
    type: '@utilities/SHOW_LOADING',
    payload: { show: true },
  });

  try {
    const { accessToken, user } = yield call(authUser, payload);
    yield put({
      type: '@auth/SIGN_IN_SUCCESS',
      payload: { token: accessToken, user: user },
    });

    if (accessToken !== '') {
      //ADMIN
      if (user.roles.admin === true) {
        localStorage.setItem('token', accessToken);
        yield put({
          type: '@auth/LOGIN_USER_SUCCESS',
          payload: { logged: true },
        });
        history.push('/catalogo');
      }

      //GVD
      if (user.roles.gvd === true) {
        localStorage.setItem('token', accessToken);
        yield put({
          type: '@auth/LOGIN_USER_SUCCESS',
          payload: { logged: true },
        });
        if (user.passwordProvisory === true) {
          history.push('/changePassword');
        } else {
          history.push('/catalogo');
        }
      }

      //CONSULTANT
      if (user.roles.consultant === true) {
        if (user.status === true) {
          localStorage.setItem('token', accessToken);
          yield put({
            type: '@auth/LOGIN_USER_SUCCESS',
            payload: { logged: true },
          });
          if (user.endereco === undefined) {
            history.push('/changeEndereco');
          } else {
            history.push('/catalogo');
          }
        } else {
          notification.warn({
            message: 'Aviso',
            description: 'Usuário sem acesso.',
          });
        }
      }

      if (user.roles.d2c === true) {
        if (user.status === true) {
          localStorage.setItem('token', accessToken);
          yield put({
            type: '@auth/LOGIN_USER_SUCCESS',
            payload: { logged: true },
          });
          if (user.endereco === undefined) {
            history.push('/changeEndereco');
          } else {
            history.push('/');
          }
        } else {
          notification.warn({
            message: 'Aviso',
            description: 'Usuário sem acesso.',
          });
        }
      }
    }

    yield put({
      type: '@utilities/SHOW_LOADING',
      payload: { show: false },
    });
  } catch (e) {
    if (
      e.response.data.msg ===
        'Invalid client: cannot retrieve client credentials' ||
      e.response.data.msg ===
        'Invalid client: cannot retrieve client credentials' ||
      e.response.data.msg === 'Invalid grant: user credentials are invalid'
    ) {
      notification.warn({
        message: 'Aviso',
        description: 'Email ou senha incorretos.',
      });
    } else {
      notification.warn({
        message: 'Aviso',
        description: e.response.data.message,
      });
    }

    // console.log(e.response.data.message);

    yield put({
      type: '@utilities/SHOW_LOADING',
      payload: { show: false },
    });
  } finally {
    yield put({
      type: '@utilities/SHOW_LOADING',
      payload: { show: false },
    });
  }
}

export function* logoutUserSaga({ payload }) {
  yield put({
    type: '@utilities/SHOW_LOADING',
    payload: { show: true },
  });

  try {
    yield put({
      type: '@auth/LOGOUT',
      payload: { logged: false },
    });
    history.push('/');
    localStorage.clear();
    window.location.reload();
  } catch (e) {
    notification.error({
      message: 'Error',
      description: 'Algo de errado aconteceu.',
    });
  }

  yield put({
    type: '@utilities/SHOW_LOADING',
    payload: { show: false },
  });
}

export function* createUserD2CSaga({ payload }) {
  yield put({
    type: '@utilities/SHOW_LOADING',
    payload: { show: true },
  });
  try {
    const data = yield call(createUser, { ...payload, documentoAtivo: 'cpf' });
    notification.success({
      message: 'Sucesso',
      description: 'Usuário criado com sucesso',
    });
    yield put({
      type: '@utilities/SHOW_LOADING',
      payload: { show: false },
    });
  } catch (error) {
    if (
      error.response.data.message.includes(
        'E11000 duplicate key error collection: charlesDB.users index: email_1 dup'
      )
    ) {
      notification.warn({
        message: 'Alerta',
        description: 'Esse email já está sendo utilizado. Tente novamente',
      });
    } else {
      notification.error({
        message: 'Erro',
        description: 'Algo de errado aconteceu.',
      });
    }

    yield put({
      type: '@utilities/SHOW_LOADING',
      payload: { show: false },
    });
  }
  yield put({
    type: '@utilities/SHOW_LOADING',
    payload: { show: false },
  });
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/CHANGE_PASSWORD_INITIAL', changePasswordSaga),
  takeLatest('@auth/LOGIN_USER', loginUserSaga),
  takeLatest('@auth/LOGOUT_USER', logoutUserSaga),
  takeLatest('@auth/CREATE_USER_D2C', createUserD2CSaga),
]);
