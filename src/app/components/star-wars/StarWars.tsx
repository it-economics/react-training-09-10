import { Stack, Typography } from '@mui/material';
import { StarWarsPlanets } from './StarWarsPlanets';

export const StarWars = () => (
  <Stack spacing={2}>
    <Typography variant={'h4'} component={'h1'}>
      Star Wars
    </Typography>
    <StarWarsPlanets />
  </Stack>
);
