// @flow
export const actions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  REGISTERATION_REQUEST: 'REGISTRATION_REQUEST',
  REGISTERATION_SUCCESS: 'REGISTRAION_SUCCESS',
  REGISTRATION_FAILURE: 'REGISTYRATION_FAILURE',
};
export type LoginRequestAction = {
  type: string,
  email: string,
  password: string,
};
export function loginRequest(
  email: string,
  password: string,
): LoginRequestAction {
  return {
    type: actions.LOGIN_REQUEST,
    email,
    password,
  };
}
export type LoginSucccessAction = {
  type: string,
  token: string,
};
export function loginSuccess(token: string): LoginSucccessAction {
  return {
    type: actions.LOGIN_SUCCESS,
    token,
  };
}
export type LoginFailureAction = {
  type: string,
  errorMessage: string,
};
export function loginFailure(errorMessage: string): LoginFailureAction {
  return {
    type: actions.LOGIN_FAILURE,
    errorMessage,
  };
}
export type LogoutRequestAction = {
  type: string,
};

export function logoutRequest(): LogoutRequestAction {
  return {
    type: actions.LOGOUT_REQUEST,
  };
}

export type LogoutSuccessAction = {
  type: string,
};

export function logoutSuccess(): LogoutSuccessAction {
  return {
    type: actions.LOGOUT_SUCCESS,
  };
}

export type RegisterUserAction = {
  type: string,
  userDetails: Object,
};
export function registerUserRequest(userDetails: Object): RegisterUserAction {
  return {
    type: actions.REGISTRATION_REQUEST,
    userDetails,
  };
}
export type RegisterUserSuccessAction = {
  type: string,
  userDetails: Object,
};
export function registerUserSuccess(
  userDetails: Object,
): RegisterUserSuccessAction {
  return {
    type: actions.REGISTERATION_SUCCESS,
    userDetails,
  };
}

export type RegisterUserFailureAction = {
  type: string,
  errorMessage: string,
};
export function registerUserFailure(
  errorMessage: string,
): RegisterUserFailureAction {
  return {
    type: actions.REGISTYRATION_FAILURE,
    errorMessage,
  };
}
