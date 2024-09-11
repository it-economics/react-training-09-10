import {
  LinearProgress,
  List,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { usePlanet } from './api';

export const StarWarsPlanetDetails = () => {
  const { id: planetId } = useParams<{ id: string }>();
  const { loading, error, planet } = usePlanet(planetId);

  if (error)
    return <div>Something went wrong while loading planet details</div>;
  if (loading || !planet) return <LinearProgress />;

  return (
    <Stack spacing={2}>
      <Typography
        variant={'h5'}
        component={'h2'}
      >{`Planet: ${planet.name} (ID: ${planetId})`}</Typography>
      <Typography>Terrain:</Typography>
      <List dense>
        {planet.terrain.map((t) => (
          <ListItemText key={t}>{t}</ListItemText>
        ))}
      </List>
    </Stack>
  );
};
