const INITIAL_STATE = {
  logged: false,
  user: {},
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
      };

    case "@auth/LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
}
