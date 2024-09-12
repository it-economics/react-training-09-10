import { Box, Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Planet } from './model';
import { extractPlanetIdFromUrl } from './planet-utils';

export const StarWarsPlanet: FC<{ planet: Planet }> = ({ planet }) => {
  const planetId = extractPlanetIdFromUrl(planet.url);

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
