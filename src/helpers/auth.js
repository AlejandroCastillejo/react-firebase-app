const USER_CREDENTIALS = "user-credentials";

export const getUserCredentials = () =>
  JSON.parse(localStorage.getItem(USER_CREDENTIALS));

export const setUserCredentials = (credentials) =>
  localStorage.setItem(USER_CREDENTIALS, JSON.stringify(credentials));

export const clearUserCredentials = () =>
  localStorage.removeItem(USER_CREDENTIALS);
