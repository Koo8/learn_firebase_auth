import React, { useContext } from 'react';
import Button from './Button';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import userContext from '../context/userContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Logout = () => {
  const navigate = useNavigate();
  const { sign_out } = useContext(userContext);
  const logoutuser = async () => {
    try {
      await signOut(auth);
      sign_out();
      navigate('/signin');
    } catch (error) {
      toast.info(error.code.substring(5).split('-').join(' '));
    }
  };
  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <Button handleClick={logoutuser}>Log out</Button>
      <Link to='/'>
        <Button>Cancel</Button>
      </Link>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};

export default Logout;
