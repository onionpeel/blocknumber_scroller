import {
  LOADING_ERROR,
  CLEAR_ERROR
} from '../types';

const initialState = {
  error: false
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ERROR:
      return {
        ...action
      };

    case CLEAR_ERROR:
      return {
        error: false
      };

    default:
      return state;
  }
};

export default errorReducer;
