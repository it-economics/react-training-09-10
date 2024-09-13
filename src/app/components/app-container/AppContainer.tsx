import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material';
import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../auth/AuthContext';

export const AppContainer: FC = () => {
  const { logout, isAuthenticated } = useAuthContext();

  return (
    <Box height="100vh" width="100vw">
      <AppBar position="static">
        <Stack direction="row">
          <Toolbar>
            {links.map(({ to, label }) => (
              <MenuButton key={to} to={to} label={label} />
            ))}
            {isAuthenticated() && (
              <Button variant={'text'} color="secondary" onClick={() => logout()}>
                Logout
              </Button>
            )}
          </Toolbar>
        </Stack>
      </AppBar>
      <Box padding={'10px'}>
        <Outlet />
      </Box>
    </Box>
  );
};

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
