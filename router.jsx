import { createBrowserRouter } from 'react-router-dom';
import Home from './src/routes/home';
import Login from './src/routes/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
