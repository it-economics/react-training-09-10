import {
  Box,
  List,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Planet } from './model';

export const StarWarsPlanet: FC<{ planet: Planet }> = ({ planet }) => (
  <Box height="100%" width="100%">
    <Paper sx={{ height: '100%', width: '100%' }}>
      <Stack spacing={2}>
        <Stack direction={"row"} spacing={2}>
          <Typography variant="h5">{planet.name}</Typography>
          <Link to={`./${planet.name}`}>Show details</Link>
        </Stack>
        <Typography>Terrain:</Typography>
        <List dense>
          {planet.terrain.map((t) => (
            <ListItemText key={t}>{t}</ListItemText>
          ))}
        </List>
      </Stack>
    </Paper>
  </Box>
);
