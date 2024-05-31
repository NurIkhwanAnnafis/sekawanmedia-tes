import { layoutTypes } from './layout.types';

const initState = {
  loading: false,
  loadingTable: false,
  isUpdateUser: false,
  isMobile: false,
};

export const layoutReducer = (state: any = initState, action: any) => {
  switch (action.type) {
    case layoutTypes.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case layoutTypes.IS_MOBILE:
      return {
        ...state,
        isMobile: action.payload,
      };

    default:
      return state;
  }
};
