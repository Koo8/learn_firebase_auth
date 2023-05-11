import React from 'react';

// useReducer is a switch statement for update context whenever it is changed by various methods (defined inside context)
const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SIGN_IN':
      return {
        ...state,
        user: payload.user,
      };
    case 'SIGN_UP':
      return {
        ...state,
        user: payload.user,
      };

    case 'SIGN WITH GOOGLE':
      return {
        ...state,
        user: payload.user,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        user: payload.user,
      };
  }
};

export const initialValue = {
  user: JSON.parse(localStorage.getItem('user')) || null,
};

export default userReducer;
