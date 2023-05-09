import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { auth } from '../config/firebase';

const Root = () => {
  return (
    <div className='flex flex-col max-w-3xl mx-auto'>
      <Header auth={auth} />
      <Outlet />
    </div>
  );
};

export default Root;
