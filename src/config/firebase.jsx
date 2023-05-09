// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAJMtIW3oRHxtzWlsyF9rFO3ryoHJd0mac',
  authDomain: 'learn-firebase-343b4.firebaseapp.com',
  projectId: 'learn-firebase-343b4',
  storageBucket: 'learn-firebase-343b4.appspot.com',
  messagingSenderId: '1074396584831',
  appId: '1:1074396584831:web:25f438cd2125705230584a',
  measurementId: 'G-GFF0HKL88E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.addScope(
  'https://www.googleapis.com/auth/contacts.readonly'
);

export { googleAuthProvider };
