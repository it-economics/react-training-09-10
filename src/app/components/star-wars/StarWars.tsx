import { Stack, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const StarWars: FC<PropsWithChildren> = ({ children }) => (
  <Stack spacing={2}>
    <Typography variant={'h4'} component={'h1'}>
      Star Wars
    </Typography>
    {children}
  </Stack>
);
