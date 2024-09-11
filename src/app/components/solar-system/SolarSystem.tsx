import { Planet as PlanetModel } from '../planet/model';
import { Planet } from '../planet/Planet';

export const SolarSystem = () => {
  return (
    <>
      <h1>Solar System</h1>
      <ol>
        {planets.map((planet) => (
          <li key={planet.name}>
            <Planet planet={planet} />
          </li>
        ))}
      </ol>
    </>
  );
};

const planets: PlanetModel[] = [
  // or: Array<Planet>
  { name: 'Mercury' },
  { name: 'Venus' },
  { name: 'Earth', moons: 1 },
  { name: 'Mars' },
  { name: 'Jupiter', moons: 5 },
  { name: 'Saturn' },
  { name: 'Uranus' },
  { name: 'Neptune' },
];
