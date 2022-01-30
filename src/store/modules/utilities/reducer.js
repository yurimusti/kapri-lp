import produce from 'immer';

const INITIAL_STATE = {
  showLoading: false,
  showModalD2C: {
    show: false,
    type: 'login',
  },
  desconto: {
    status: '',
    data: {},
    message: '',
  },
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@utilities/SHOW_LOADING':
      return {
        ...state,
        showLoading: action.payload.show,
      };

    case '@utilities/SHOW_MODAL':
      return {
        ...state,
        showModalD2C: action.payload,
      };

    case '@utilities/DESCONTO_SUCCESS':
      return {
        ...state,
        desconto: action.payload,
      };

    case '@auth/LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
}
