import { createBrowserRouter } from 'react-router-dom';
import Home from './src/routes/home';
import Login from './src/routes/login';
import Register from './src/routes/register';

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
]);

export default router;
