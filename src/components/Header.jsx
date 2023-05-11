import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../context/userContext';
import { auth } from '../config/firebase';

const Header = () => {
  const { user } = useContext(userContext);
  return (
    <div className='w-full h-14 flex items-center justify-end gap-6 border-b-2 mb-2'>
      <Link to='/'>Home</Link>
      {/* listen to authCurrentUserupdate ?? */}
      {!user && <Link to='signin'>Sign In</Link>}
      {!user && <Link to='signup'>Sign Up</Link>}
      {user && <span className='text-green-500'>Welcome {user.email}</span>}
      {user && <Link to='logout'>Log out</Link>}
    </div>
  );
};

export default Header;
