import React from 'react';

// useReducer is a switch statement for update context whenever it is changed by various methods (defined inside context)
const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SIGN_IN':
      return {
        ...state,
        user: payload.user,
        login: payload.login,
      };
    case 'SIGN_UP':
      return {
        ...state,
        user: payload.user,
        login: payload.login,
      };

    case 'SIGN WITH GOOGLE':
      return {
        ...state,
        user: payload.user,
        login: payload.login,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        user: payload.user,
        login: payload.login,
      };
  }
};

export const initialValue = {
  user: localStorage.getItem('user') || { email: '', password: '' },
  login: localStorage.getItem('login') || false,
};

export default userReducer;
