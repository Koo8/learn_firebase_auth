import React, { createContext, useReducer } from 'react';
import userReducer, { initialValue } from './userReducer';

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialValue);

  // methods match reducer switch cases
  const sign_in = (email, password) => {
    const olduser = { email: email, password: password };
    localStorage.setItem('user', olduser);
    localStorage.setItem('login', true);
    dispatch({
      type: 'SIGN_IN',
      payload: {
        user: olduser,
        login: true,
      },
    });
  };
  const sign_up = (email, password) => {
    const olduser = { email: email, password: password };
    localStorage.setItem('user', olduser);
    localStorage.setItem('login', true);
    dispatch({
      type: 'SIGN_UP',
      payload: {
        user: olduser,
        login: true,
      },
    });
  };

  const sign_up_with_google = (googleuser) => {
    localStorage.setItem('user', googleuser);
    localStorage.setItem('login', true);
    dispatch({
      type: 'SIGN WITH GOOGLE',
      payload: {
        user: googleuser,
        login: true,
      },
    });
  };

  const sign_out = () => {
    const olduser = { email: '', password: '' };
    localStorage.setItem('user', olduser);
    localStorage.setItem('login', false);

    dispatch({
      type: 'SIGN_OUT',
      payload: {
        user: { email: '', password: '' },
        login: false,
      },
    });
  };

  const value = {
    user: state.user,
    login: state.login,
    sign_in,
    sign_out,
    sign_up,
    sign_up_with_google,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default userContext;
