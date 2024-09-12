import { LinearProgress, Stack, Typography } from '@mui/material';
import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from './app/components/error/ErrorBoundary';
import { CustomThemeProvider } from './app/CustomThemeProvider';
import { router } from './app/router';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <CustomThemeProvider>
      <ErrorBoundary fallback={<Typography variant="h1">Oh Shoot!</Typography>}>
        <Provider store={store}>
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
        </Provider>
      </ErrorBoundary>
    </CustomThemeProvider>
  </StrictMode>
);
