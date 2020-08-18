// @flow
import type {AuthState} from './ReduxStore';
import {actions} from '../actions/Authenticate';

export default function (state: AuthState = {}, action: any): AuthState {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return state;
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    case actions.LOGIN_FAILURE:
      return state;
    case actions.LOGOUT_REQUEST:
    case actions.LOGOUT_SUCCESS:
      return state;
    case actions.REGISTERATION_REQUEST:
      return state;
    case actions.REGISTERATION_SUCCESS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    case actions.REGISTRATION_FAILURE:
      return state;
    default:
      return state;
  }
}
