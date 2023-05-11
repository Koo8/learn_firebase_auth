import React, { createContext, useEffect, useReducer } from 'react';
import userReducer, { initialValue } from './userReducer';

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialValue);

  // update localStorage whenever user info changed
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  // methods match reducer switch cases
  const sign_in = (email, password) => {
    const olduser = { email: email, password: password };
    dispatch({
      type: 'SIGN_IN',
      payload: {
        user: olduser,
      },
    });
  };
  const sign_up = (email, password) => {
    const olduser = { email: email, password: password };

    dispatch({
      type: 'SIGN_UP',
      payload: {
        user: olduser,
      },
    });
  };

  const sign_up_with_google = (googleuser) => {
    dispatch({
      type: 'SIGN WITH GOOGLE',
      payload: {
        user: googleuser,
      },
    });
  };

  const sign_out = () => {
    dispatch({
      type: 'SIGN_OUT',
      payload: {
        user: null,
      },
    });
  };

  const value = {
    user: state.user,
    sign_in,
    sign_out,
    sign_up,
    sign_up_with_google,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default userContext;
