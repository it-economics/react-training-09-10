import { Typography } from '@mui/material';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { ErrorBoundary } from './app/components/error/ErrorBoundary';
import { CustomThemeProvider } from './app/CustomThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <CustomThemeProvider>
      <ErrorBoundary fallback={<Typography variant="h1">Oh Shoot!</Typography>}>
        <App />
      </ErrorBoundary>
    </CustomThemeProvider>
  </StrictMode>
);
