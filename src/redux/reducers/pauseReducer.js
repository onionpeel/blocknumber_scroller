import { PAUSE } from '../types';

const initialState = false;

const pauseReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAUSE:
      return true;

    default:
      return state;
  }
};

export default pauseReducer;
