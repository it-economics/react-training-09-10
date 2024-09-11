import { lazy } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import App from './app';
import { SolarSystem } from './components/solar-system/SolarSystem';
import { StarWarsPlanetDetails } from './components/star-wars/StarWarsPlanetDetails';
import { StarWarsPlanets } from './components/star-wars/StarWarsPlanets';
import { Home } from './pages/home/Home';

const Joke = lazy(() => import('./pages/joke'));
const StarWars = lazy(() => import('./pages/star-wars'));
const NotFound = lazy(() => import('./pages/not-found'));

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      { index: true, element: <Navigate to={'/home'} replace={true} /> },
      {
        path: 'home',
        element: <Home />,
      },
      { path: 'planets', element: <SolarSystem /> },
      { path: 'joke', element: <Joke /> },
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
              {path: ':id', element: <StarWarsPlanetDetails />},
            ],
          },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
