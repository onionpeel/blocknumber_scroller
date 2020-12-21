import { all } from 'redux-saga/effects';
import { watchInitializeStateSaga } from './initializeStateSagas';
import { watchRunTimerSaga, watchResumeSaga, watchClearErrorSaga } from './runTimerSaga';

export default function* rootSaga()   {
  yield all([
    watchInitializeStateSaga(),
    watchRunTimerSaga(),
    watchResumeSaga(),
    watchClearErrorSaga()
  ]);
};
