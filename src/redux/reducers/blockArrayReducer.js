import { SET_BLOCK_ARRAY } from '../types';

const initialState = [];

const blockArrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOCK_ARRAY:
      return action.payload;

    default:
      return state;
  }
};

export default blockArrayReducer;
