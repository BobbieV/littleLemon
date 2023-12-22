import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root.tsx';
import ErrorPage from './error-page.tsx';
import Availability from './routes/availability.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "availability",
    element: <Availability />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
