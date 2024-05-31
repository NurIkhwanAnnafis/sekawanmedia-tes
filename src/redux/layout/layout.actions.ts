import { layoutTypes } from './layout.types';

export const setLoading = (flag: boolean) => ({
  type: layoutTypes.LOADING,
  payload: flag,
});

export const setIsMobile = (flag: boolean) => ({
  type: layoutTypes.IS_MOBILE,
  payload: flag,
});
