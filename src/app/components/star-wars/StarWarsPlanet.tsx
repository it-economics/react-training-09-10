import { Box, Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Planet } from './model';

const planetIdRegExp = /^.*\/(\d+)\/?$/; // Matches SWAPI URL with or without trailing slash

export const StarWarsPlanet: FC<{ planet: Planet }> = ({ planet }) => {
  const planetId = planetIdRegExp.exec(planet.url)?.[1];

  return (
    <Box height="100%" width="100%">
      <Paper sx={{ height: '100%', width: '100%' }}>
        <Stack spacing={2}>
          <Stack direction={'row'} spacing={2}>
            <Link to={`./${planetId}`}>
              <Typography variant="h5">{planet.name}</Typography>
            </Link>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};
