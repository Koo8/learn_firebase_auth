import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Root from './components/Root';
import SignIn from './components/SignIn';
import { UserProvider } from './context/userContext';
import Logout from './components/Logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
    ],
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
    </UserProvider>
  );
}

export default App;
