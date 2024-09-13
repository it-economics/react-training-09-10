import { lazy } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import App from './app';
import { AuthContextProvider } from './auth/AuthContext';
import { withAuthGuard } from './auth/AuthGuard';
import { SolarSystem } from './components/solar-system/SolarSystem';
import { StarWarsPlanetDetails } from './components/star-wars/StarWarsPlanetDetails';
import { StarWarsPlanets } from './components/star-wars/StarWarsPlanets';
import { Home } from './home/components/home/Home';
import { Issues } from './issues';

const Joke = lazy(() => import('./pages/joke'));
const NotesPage = lazy(() => import('./notes/pages/notes-gallery'));
const StarWars = lazy(() => import('./pages/star-wars'));
const NotFound = lazy(() => import('./pages/not-found'));
const RegisterPage = lazy(() => import('./pages/register'));
const LoginPage = lazy(() => import('./pages/login'));

export const router = createBrowserRouter([
  {
    path: '',
    element: (
      <AuthContextProvider>
        <Outlet />
      </AuthContextProvider>
    ),
    children: [
      {
        path: '',
        element: withAuthGuard(<App />),
        children: [
          { index: true, element: <Navigate to={'./home'} replace={true} /> },
          {
            path: 'home',
            element: <Home />,
          },
          { path: 'planets', element: <SolarSystem /> },
          { path: 'joke', element: <Joke /> },
          {path: 'notes', element: <NotesPage />},
          {
            path: 'star-wars',
            element: <StarWars />,
            children: [
              {
                index: true,
                element: <Navigate to={'./planets'} replace={true} />,
              },
              {
                path: 'planets',
                element: (
                  <StarWarsPlanets>
                    <Outlet />
                  </StarWarsPlanets>
                ),
                children: [
                  { index: true, element: null },
                  { path: ':id', element: <StarWarsPlanetDetails /> },
                ],
              },
            ],
          },
          { path: 'issues', element: <Issues /> },
        ],
      },
      {
        path: 'public',
        element: <App />,
        children: [{ index: true, element: <Home /> }],
      },
      { path: 'register', element: <RegisterPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
