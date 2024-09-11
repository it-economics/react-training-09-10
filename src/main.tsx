import { createTheme, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren, StrictMode, useMemo } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useMemo(() => createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          color: 'primary',
          size: 'large',
        }
      }
    },
    palette: {
      primary: {
        main: '#6E9C9F'
      },
      secondary: {
        main: '#91DD98'
      }
    }
  }), []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

root.render(
  <StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </StrictMode>
);
