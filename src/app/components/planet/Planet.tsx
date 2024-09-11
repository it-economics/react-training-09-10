import { Typography } from '@mui/material';
import { FC } from 'react';
import { Planet as PlanetModel } from './model';

export const Planet: FC<{ planet: PlanetModel }> = ({ planet }) => (
  <Typography variant="h5" component="h2">
    {planet.name}
  </Typography>
);
