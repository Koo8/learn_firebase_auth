import React from 'react';

const Button = ({ children, handleClick, BtnDisable }) => {
  return (
    <button
      disabled={BtnDisable}
      onClick={handleClick}
      className='w-1/2 h-8 text-slate-700 bg-white hover:bg-slate-700 hover:text-white border-slate-700 border-[1px] '
    >
      {children}
    </button>
  );
};

export default Button;
