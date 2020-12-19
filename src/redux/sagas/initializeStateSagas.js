import Web3 from 'web3';
import { takeEvery, put } from 'redux-saga/effects';
import { createBlockArray } from '../utils/utils';

import {
  INITIALIZE_WEB3,
  INITIALIZE_STATE_SAGA,
  SET_BLOCK_NUMBER,
  SET_BLOCK_ARRAY,
  RUN_TIMER_SAGA
} from '../types';

function* initializeStateSaga() {
  const web3 = new Web3('https://mainnet.infura.io/v3/d48e5bd25e57470aa15bdc3e9460f53b');
  yield put({ type: INITIALIZE_WEB3, payload: web3 });

  const blockNumber = yield web3.eth.getBlockNumber();
  yield put({ type: SET_BLOCK_NUMBER, payload: blockNumber });
  
  const blockArray = createBlockArray(blockNumber);
  yield put({ type: SET_BLOCK_ARRAY, payload: blockArray });

  yield put({ type: RUN_TIMER_SAGA });
};

export function* watchInitializeStateSaga() {
  yield takeEvery(INITIALIZE_STATE_SAGA, initializeStateSaga);
};
