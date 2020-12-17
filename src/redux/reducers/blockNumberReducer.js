import { WATCH_SET_BLOCK_NUMBER_SAGA } from '../types';

const initialState = null;

const blockNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case WATCH_SET_BLOCK_NUMBER_SAGA:
      return action.payload;

    default:
      return state;
  }
};

export default blockNumberReducer;
