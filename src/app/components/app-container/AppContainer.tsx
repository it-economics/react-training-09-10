import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material';
import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const AppContainer: FC = () => (
  <Box height="100vh" width="100vw">
    <AppBar position="static">
      <Stack direction="row">
        <Toolbar>
          {links.map(({ to, label }) => (
            <MenuButton key={to} to={to} label={label} />
          ))}
        </Toolbar>
      </Stack>
    </AppBar>
    <Box padding={'10px'}>
      <Outlet />
    </Box>
  </Box>
);

const links = [
  { to: '/home', label: 'Home' },
  { to: '/star-wars', label: 'Star Wars' },
  { to: '/planets', label: 'Planets' },
  { to: '/joke', label: 'Joke' },
  { to: '/issues', label: 'Issues' },
];

interface MenuButtonProps {
  to: string;
  label: string;
}

const MenuButton: FC<MenuButtonProps> = ({ to, label }) => (
  <NavLink to={to}>
    {({ isActive }) => (
      <Button variant={isActive ? 'contained' : 'text'} color="secondary">
        {label}
      </Button>
    )}
  </NavLink>
);
