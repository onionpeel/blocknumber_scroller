import { INITIALIZE_WEB3 } from '../types';

const initialState = null;

const web3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_WEB3:
      return action.payload;

    default:
      return state;
  }
};

export default web3Reducer;
