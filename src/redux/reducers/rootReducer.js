import { combineReducers } from 'redux';
import isPausedReducer from './isPausedReducer';
import blockNumberReducer from './blockNumberReducer';
import web3Reducer from './web3Reducer';
import blockArrayReducer from './blockArrayReducer';
import isLoadingReducer from './isLoadingReducer';

const rootReducer = combineReducers({
  web3: web3Reducer,
  isPaused: isPausedReducer,
  blockNumber: blockNumberReducer,
  blockArray: blockArrayReducer,
  isLoading: isLoadingReducer
});

export default rootReducer;
