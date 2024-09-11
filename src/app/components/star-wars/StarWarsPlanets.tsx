import {
  Box,
  Button,
  Grid2,
  LinearProgress,
  Stack,
  Tooltip,
} from '@mui/material';
import { FC } from 'react';
import { usePlanets } from './api';
import { StarWarsPlanet } from './StarWarsPlanet';

export const StarWarsPlanets = () => {
  const { error, loading, planets, previous, next } = usePlanets();

  if (error) return <div>Something went wrong...</div>;

  return (
    <Stack spacing={2}>
      {loading && <LinearProgress />}
      <Grid2 container columns={10} spacing={6}>
        {planets.map((planet) => (
          <Grid2 key={planet.name} size={{ xs: 2.5, md: 2 }}>
            <StarWarsPlanet planet={planet} />
          </Grid2>
        ))}
      </Grid2>
      <Stack direction="row" justifyContent="space-between">
        <NavButton loading={loading} label="Previous" onClick={previous} />
        <NavButton loading={loading} label="Next" onClick={next} />
      </Stack>
    </Stack>
  );
};

const NavButton: FC<{
  loading: boolean;
  onClick?: VoidFunction;
  label: string;
}> = ({ loading, onClick, label }) => (
  <Tooltip title={loading && 'Wait until planets are loaded'}>
    <Box>
      {/* NOTE: Disabled buttons *cannot* hold ref for tooltip */}
      <Button onClick={onClick} disabled={loading || !onClick}>
        {label}
      </Button>
    </Box>
  </Tooltip>
);
