export const loginRequest = () => ({
  type: 'LOGIN_REQUEST',
});

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  error,
});

export const logoutRequest = () => ({
  type: 'LOGOUT_REQUEST',
});

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
});

export const logoutFailure = (error) => ({
  type: 'LOGOUT_FAILURE',
  error,
});
