/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';
import MainLayout from 'layouts/main-layout';
import AuthLayout from 'layouts/auth-layout';
import Splash from 'components/loader/Splash';
import PageLoader from 'components/loader/PageLoader';
import AssignmentDetailsPage from 'components/sections/dashboard/assisgnments/AssignmentDetailsPage';

// Lazy load components
const App = lazy(() => import('App'));
const Dashboard = lazy(() => import('pages/dashboard'));
const Signin = lazy(() => import('pages/authentication/Signin'));
const Signup = lazy(() => import('pages/authentication/Signup'));
const AssignmentsPage = lazy(() => import('../components/sections/dashboard/assisgnments/Assignmentspage'));



const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <Signin />,
      },
      {
        path: rootPaths.authRoot,
        element: (
          <AuthLayout>
            <Outlet />
          </AuthLayout>
        ),
        children: [
          {
            path: paths.signin,
            element: <Signin />,
          },
          {
            path: paths.signup,
            element: <Signup />,
          },
        ],
      },
      {
        path: '/dashboard',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Dashboard />
            </Suspense>
          </MainLayout>
        ),
      },
      {
        path: '/assignments',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <AssignmentsPage />
            </Suspense>
          </MainLayout>
        ),
      },
      {
        path: '/assignment/:id', // Route for assignment details
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <AssignmentDetailsPage />
            </Suspense>
          </MainLayout>
        ),
      },
    ],
  },
], {
  basename: '/', // Set the basename to '/'
});

export default router;
