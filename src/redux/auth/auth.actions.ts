import { authTypes } from './auth.types';

export const setLoginRequest = () => ({
  type: authTypes.LOGIN_REQUEST,
});

export const setLoginSuccess = (data: any) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload: data,
});

export const setLoginFailure = () => ({
  type: authTypes.LOGIN_FAILURE,
});

export const setLogoutRequest = () => ({
  type: authTypes.LOGOUT_REQUEST,
});

export const setLogoutSuccess = () => ({
  type: authTypes.LOGOUT_SUCCESS,
});

export const setLogoutFailure = () => ({
  type: authTypes.LOGOUT_FAILURE,
});
