import React, { useContext, useState } from 'react';
import Button from './Button';
import userContext from '../context/userContext';
import { auth, googleAuthProvider } from '../config/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const SignIn = () => {
  const { sign_in, sign_up, sign_up_with_google } = useContext(userContext);
  const [oldemail, setOldEmail] = useState('');
  const [oldpassword, setOldPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [openSignUpForm, setOpenSignUpForm] = useState(false);

  const signinuser = async () => {
    try {
      await signInWithEmailAndPassword(auth, oldemail, oldpassword); // sign in with firebase
      // practice with onAuthStateChange
      // auth.onAuthStateChanged((user) => console.log(user?.uid));
      sign_in(oldemail, oldpassword); // update context for user login info

      navigate('/');
    } catch (error) {
      toast.info(error.code.substring(5).split('-').join(' '));
    }
  };

  // toggle signin with google in case it is signed in already with another account
  const signinwithgoogle = async () => {
    // if (auth.currentUser) auth.signOut();
    await signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        // print out the result
        // const print = Object.entries(result);
        // console.log(print); ===> the following:
        // (4) [Array(2), Array(2), Array(2), Array(2)]
        // 0:(2) ['user', UserImpl]  1:(2) ['providerId', 'google.com'] 2:(2) ['_tokenResponse', {…}] 3:(2) ['operationType', 'signIn']
        let googleUser = result.user;
        // console.log(googleUser);
        sign_up_with_google(googleUser);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
        console.log(`
        error code is ${errorCode};
        error message is ${errorMessage};
        error email is ${email};
        error credential is ${credential};
        `);
      });
  };

  const signupuser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      sign_up(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.info(error.code.substring(5).split('-').join(' '));
    }
  };

  return (
    <div>
      <div className='flex  flex-col bg-slate-200 p-4 mb-10'>
        <h2 className='text-lg font-medium'>Sign In</h2>
        <div className='my-4 flex justify-center items-center'>
          <div className='w-3/5 flex flex-col gap-1 justify-center items-center'>
            <input
              className='w-1/2 border-slate-400 border-[1px] p-1'
              type='email'
              placeholder='email'
              onChange={(e) => setOldEmail(e.target.value)}
            />
            <input
              className='w-1/2 border-slate-400 border-[1px] p-1'
              type='password'
              placeholder='password'
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <Button handleClick={signinuser}>sign in</Button>
          </div>
          <div className='w-2/5'>
            <Button handleClick={signinwithgoogle}>sign in with google</Button>
          </div>
        </div>
      </div>
      {/* for controlling the sign up form  */}
      <p>
        Don't have an account yet?{' '}
        <span
          className='cursor-pointer hover:text-green-900'
          onClick={() => setOpenSignUpForm(true)}
        >
          sign up first
        </span>{' '}
      </p>

      <div
        className={`flex flex-col bg-slate-200 p-4 mb-10 gap-4 ${
          openSignUpForm ? 'scale-100' : 'scale-0'
        } duration-300`}
      >
        <h2 className='text-lg font-medium'>Sign Up</h2>
        {/* <div> */}
        <div className=' flex flex-col gap-1 justify-center items-center'>
          <input
            className='w-1/2 border-slate-400 border-[1px] p-1'
            type='email'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='w-1/2 border-slate-400 border-[1px] p-1'
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button handleClick={signupuser}>sign Up</Button>
        </div>
        {/* </div> */}
      </div>

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

export default SignIn;
