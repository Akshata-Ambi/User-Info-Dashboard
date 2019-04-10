// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_USER = 'LOGOUT_USER';

// ------------------------------------
// Actions
// ------------------------------------
export const loginSuccess = value => {
  return {
    type    : LOGIN_SUCCESS,
    payload : value
  }
}

export const loginFail = value => {
  return {
    type    : LOGIN_FAIL,
    payload : value
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}