import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material';
import { FC } from 'react';
import { Home } from '../../pages/home/Home';

export const AppContainer: FC = () => (
  <Box height="100vh" width="100vw">
    <AppBar position="static">
      <Stack direction="row">
        <Toolbar>
          <Button variant="text" color="secondary">Home</Button>
        </Toolbar>
      </Stack>
    </AppBar>
    <Home />
  </Box>
);
