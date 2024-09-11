import { FC } from 'react';
import { Planet as PlanetModel } from './model';

export const Planet: FC<{ planet: PlanetModel }> = ({ planet }) => (
  <div>
    <h2>{planet.name}</h2>
    <ul>
      <li>Orbit: {planet.orbit}</li>
      <li>Diameter: {planet.diameter}</li>
      <li>Moons: {planet.moons}</li>
    </ul>
  </div>
);
