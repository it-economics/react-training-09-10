import { AppBar, Box, Stack } from '@mui/material';
import { FC } from 'react';
import { Home } from '../../pages/home/Home';

export const AppContainer: FC = () => (
  <Box height="100vh" width="100vw">
    <AppBar position="static">
      <Stack direction="row">
        <span>Home</span>
      </Stack>
    </AppBar>
    <Home />
  </Box>
)
