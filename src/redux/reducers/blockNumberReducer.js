import { SET_BLOCK_NUMBER } from '../types';

const initialState = null;

const blockNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOCK_NUMBER:
      return action.payload;

    default:
      return state;
  }
};

export default blockNumberReducer;
