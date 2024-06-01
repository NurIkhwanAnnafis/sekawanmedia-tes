import { authTypes } from './notification.types';

type IAction = { type: 'ADD_NOTIFICATION' | 'RESET_NOTIFICATION' | ''; payload: { id: string; title: string } }
type IState = { list: Array<{ id: string | number; title: string }> }

const initState: IState = {
  list: [],
};

export const notificationReducer = (state: IState = initState, action: IAction) => {
  switch (action.type) {
    case authTypes.ADD_NOTIFICATION:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case authTypes.RESET_NOTIFICATION:
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
