import { LinearProgress, Stack, Typography } from '@mui/material';
import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from './app/components/error/ErrorBoundary';
import { CustomThemeProvider } from './app/CustomThemeProvider';
import { router } from './app/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <CustomThemeProvider>
      <ErrorBoundary fallback={<Typography variant="h1">Oh Shoot!</Typography>}>
        <Suspense
          fallback={
            <Stack spacing={2}>
              <Typography>Hold on a second</Typography>
              <LinearProgress />
            </Stack>
          }
        >
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </CustomThemeProvider>
  </StrictMode>
);
