import { combineReducers } from 'redux';
import pauseReducer from './pauseReducer';
import blockNumberReducer from './blockNumberReducer';

const rootReducer = combineReducers({
  paused: pauseReducer,
  blockNumber: blockNumberReducer
});

export default rootReducer;
