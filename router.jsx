import { createBrowserRouter } from 'react-router-dom';
import Home from './src/routes/home';
import Login from './src/routes/login';
import Register from './src/routes/register';
import ClientHome from './src/routes/clientHome';
import StoreHome from './src/routes/storeHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/Register',
    element: <Register />,
  },
  {
    path: '/ClientHome',
    element: <ClientHome />,
  },
  {
    path: '/StoreHome',
    element: <StoreHome />,
  },
]);

export default router;
