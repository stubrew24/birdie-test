import { all } from '@redux-saga/core/effects';
import { eventsSagas } from './events';

function* initSaga() {
  yield all([eventsSagas()]);
}

export default initSaga;