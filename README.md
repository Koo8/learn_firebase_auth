# Learn firebase

inspired by https://www.youtube.com/watch?v=2hR-uWjBAgw

### setup

- npm create vite@latest nancyMarket -- --template react
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p => for creating tailwindcss.config file and postcss.config.js file. NOTE: without -p, tailwindcss won't work.
  -- inside tailwind.config.cjs content: => [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}",]
  -- inside index.css, remove all, then add
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
- npm run dev

### setup firebase

- choose web app, run 'npm install firebase'
- copy and paste all initialize firebase codes from the firebase console to a new file called Firebase-config.jsx
- npm install -g firebase-tools : for host this app with Firebase Hosting, Firebase CLI is needed. -g for global install

### how to use Firebase

- Authentication : choose sign-in methods
- > > for email signin or signup, signInWithEmailAndPassword and
  > > createUserWithEmailAndPassword for signin and create new user and signin at the same time. Combine with context+reducer for user state management. Use localStorage.getItem or setItem to make the signin remembered after restart the app. Use catched 'error.code' with substring for display error as a 'toast'.
  > > There are methods from 'auth' for 'sendEmailVerification' and 'sendPasswordResetEmail'. I am not using these functionalities here.
  > > use auth package, async all methods used inside this package, otherwise data saved inside useContext (with useReducer) won't in sync with auth.currentUser data.
  > > also put await into try block as a convention to catch all possible errors.
- fireStore: for CRUD operations.

### install react toastify

- npm i react-toastify, add its style sheet

### how to

- how to clear all input values after signin?
- how to notify user he/she is signed in? how to know if a user signed in, who is the user?
- auth.currentUser info is not passed to Header immediately, should I use Context for this
