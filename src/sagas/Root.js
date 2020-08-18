import {fork} from 'redux-saga/effects';
import {watchLogin} from './Authenticate';

export function* rootSaga(): any {
  yield fork(watchLogin);
}
