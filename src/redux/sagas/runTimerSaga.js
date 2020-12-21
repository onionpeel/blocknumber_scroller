import { takeLatest, put, select } from 'redux-saga/effects';
import { delay } from '../utils/utils';
import { createBlockArray } from '../utils/utils';
import { errorActionCreator } from '../actions/errorActions';
import {
  RUN_TIMER_SAGA,
  SET_BLOCK_NUMBER,
  SET_BLOCK_ARRAY,
  RESUME,
  RESUME_SAGA,
  CLEAR_ERROR,
  CLEAR_ERROR_SAGA
 } from '../types';

//This function recursively calls itself with a 5 second delay.
function* runTimerSaga() {
  try{
    yield delay(5000);

    let isPaused = yield select(state => state.isPaused);
    if(isPaused) return;

    let error = yield select(state => state.error.error);
    if(error) return;

    const web3 = yield select(state => state.web3);

    const blockNumber = yield web3.eth.getBlockNumber();
    yield put({ type: SET_BLOCK_NUMBER, payload: blockNumber });

    const blockArray = createBlockArray(blockNumber);
    yield put({ type: SET_BLOCK_ARRAY, payload: blockArray });

    yield put({ type: RUN_TIMER_SAGA });
  } catch (error) {
    yield put(errorActionCreator(error));
  };
};

export function* watchRunTimerSaga() {
  yield takeLatest(RUN_TIMER_SAGA, runTimerSaga);
};


function* makeIsPausedFalseSaga() {
  yield put({ type: RESUME });
  yield put({ type: RUN_TIMER_SAGA });
};

export function* watchResumeSaga() {
  yield takeLatest(RESUME_SAGA, makeIsPausedFalseSaga);
};


function* clearErrorSaga() {
  yield put({type: CLEAR_ERROR});
  yield put({type: RUN_TIMER_SAGA});
};

export function* watchClearErrorSaga() {
  yield takeLatest(CLEAR_ERROR_SAGA, clearErrorSaga);
};
