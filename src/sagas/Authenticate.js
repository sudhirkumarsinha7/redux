import type {LoginRequestAction} from '../actions/Authenticate';
import {takeLatest, take, call, put, select} from 'redux-saga/effects';
import {actions as authAction, loginSuccess} from '../actions/Authenticate';
export function* watchLogin(): any {
  yield takeLatest(authAction.LOGIN_REQUEST, login);
}
export function* login(action: LoginRequestAction): any {
  const {email, password} = action;
  console.log('actionlogin ' + JSON.stringify(action));
  yield put(loginSuccess(action));

  //   try {
  //     // const client: RestClient = yield call(varanusLogin, VARANUS_HOSTNAME, req)
  //     yield put(loginSuccess('token'))
  //   } catch (err) {
  //     console.log('login failed:', err.status)
  //     if (err.status === 403) {
  //       yield put(loginFailure('Invalid Credentials'))
  //     } else {
  //       yield put(loginFailure(err.message))
  //     }
  //   }
}
