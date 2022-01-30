export function signInRequest(email, password, grant_type) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password, grant_type },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function changePassword(payload) {
  return {
    type: '@auth/CHANGE_PASSWORD_INITIAL',
    payload,
  };
}

export function LOGOUT_USER(payload) {
  return {
    type: '@auth/LOGOUT_USER',
    payload,
  };
}

export function LOGIN_USER(payload) {
  return {
    type: '@auth/LOGIN_USER',
    payload,
  };
}


export function CREATE_USER_D2C(payload) {
  return {
    type: '@auth/CREATE_USER_D2C',
    payload,
  };
}
