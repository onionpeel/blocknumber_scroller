import { LOADING_COMPLETE } from '../types';

const initialState = true;

const isLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_COMPLETE:
      return false;

    default:
      return state;
  }
};

export default isLoadingReducer;
