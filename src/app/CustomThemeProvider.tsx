import { createTheme, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren, useMemo } from 'react';

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiButton: {
            defaultProps: {
              variant: 'contained',
              color: 'primary',
              size: 'large'
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
      }),
    []
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
