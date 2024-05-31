import { authTypes } from './auth.types';

const initState = {
  loading: false,
  currentUser: null,
};

export const authReducer = (state: any = initState, action: any) => {
  switch (action.type) {
    case authTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };

    case authTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case authTypes.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case authTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        loading: false,
      };

    case authTypes.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
