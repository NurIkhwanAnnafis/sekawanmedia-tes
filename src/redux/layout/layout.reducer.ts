import { layoutTypes } from './layout.types';

type IAction = { type: 'LOADING' | 'IS_MOBILE' | ''; payload: boolean }
type IState = { loading: boolean; isMobile: boolean }

const initState = {
  loading: false,
  isMobile: false,
};

export const layoutReducer = (state: IState = initState, action: IAction) => {
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
