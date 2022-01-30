export function showLoading(show) {
  return {
    type: '@utilities/SHOW_LOADING',
    payload: { show },
  };
}

export function getCep(cep) {
  return {
    type: '@utilities/GET_CEP',
    payload: { cep },
  };
}

export function deslogar() {
  return {
    type: '@auth/LOGOUT',
  };
}

export function showModal(payload) {
  return {
    type: '@utilities/SHOW_MODAL',
    payload,
  };
}
