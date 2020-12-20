import { takeLatest, put, select } from 'redux-saga/effects';
import { delay } from '../utils/utils';
import { createBlockArray } from '../utils/utils';
import {
  RUN_TIMER_SAGA,
  SET_BLOCK_NUMBER,
  SET_BLOCK_ARRAY,
  RESUME,
  RESUME_SAGA
 } from '../types';

//This function recursively calls itself with a 5 second delay.
function* runTimerSaga() {
  yield delay(5000);

  let isPaused = yield select(state => state.isPaused);
  if(isPaused) return;

  const web3 = yield select(state => state.web3);

  const blockNumber = yield web3.eth.getBlockNumber();
  yield put({ type: SET_BLOCK_NUMBER, payload: blockNumber });

  const blockArray = createBlockArray(blockNumber);
  yield put({ type: SET_BLOCK_ARRAY, payload: blockArray });

  yield put({ type: RUN_TIMER_SAGA });
};

function* makeIsPausedFalse() {
  yield put({ type: RESUME });
  yield put({ type: RUN_TIMER_SAGA });
};

export function* watchRunTimerSaga() {
  yield takeLatest(RUN_TIMER_SAGA, runTimerSaga);
};

export function* watchResumeSaga() {
  yield takeLatest(RESUME_SAGA, makeIsPausedFalse);
};
