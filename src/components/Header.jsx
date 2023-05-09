import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../context/userContext';
import { auth } from '../config/firebase';

const Header = () => {
  const { user, login } = useContext(userContext);
  console.log(`user's email : ${user.email} `);
  console.log(`auth's currentUser is ${auth.currentUser?.email}`);
  return (
    <div className='w-full h-14 flex items-center justify-end gap-6 border-b-2 mb-2'>
      <Link to='/'>Home</Link>
      {/* listen to authCurrentUserupdate ?? */}
      {!login && <Link to='signin'>Sign In</Link>}
      {!login && <Link to='signup'>Sign Up</Link>}
      {login && <span className='text-green-500'>Welcome {user.email}</span>}
      {login && <Link to='logout'>Log out</Link>}
    </div>
  );
};

export default Header;
