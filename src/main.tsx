import { LinearProgress, Stack, Typography } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from './app/components/error/ErrorBoundary';
import { CustomThemeProvider } from './app/CustomThemeProvider';
import { initI18n } from './app/i18n';
import { store } from './app/redux/store';
import { router } from './app/router';

initI18n();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <CustomThemeProvider>
      <ErrorBoundary fallback={<Typography variant="h1">Oh Shoot!</Typography>}>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </ErrorBoundary>
    </CustomThemeProvider>
  </StrictMode>
);
