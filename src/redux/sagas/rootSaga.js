import { all } from 'redux-saga/effects';
import { watchInitializeStateSaga } from './initializeStateSagas';

export default function* rootSaga()   {
  yield all([
    watchInitializeStateSaga()
  ]);
};
