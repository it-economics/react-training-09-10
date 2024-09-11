import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Planet as PlanetModel } from '../planet/model';
import { Planet } from '../planet/Planet';

export const SolarSystem = () => {
  return (
    <>
      <Typography variant="h3" component="h1">
        Solar System
      </Typography>
      <List>
        {planets.map((planet) => (
          <ListItem key={planet.name} disablePadding>
            <ListItemText>
              <Planet planet={planet} />
            </ListItemText>
          </ListItem>
        ))}
      </List>
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
