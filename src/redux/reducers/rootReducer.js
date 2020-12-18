import { combineReducers } from 'redux';
import pauseReducer from './pauseReducer';
import blockNumberReducer from './blockNumberReducer';
import web3Reducer from './web3Reducer';
import blockArrayReducer from './blockArrayReducer';

const rootReducer = combineReducers({
  web3: web3Reducer,
  paused: pauseReducer,
  blockNumber: blockNumberReducer,
  blockArray: blockArrayReducer
});

export default rootReducer;
