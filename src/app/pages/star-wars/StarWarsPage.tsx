import { Outlet } from 'react-router-dom';
import { StarWars } from '../../components/star-wars/StarWars';

export const StarWarsPage = () => (
  <StarWars>
    <Outlet />
  </StarWars>
);
