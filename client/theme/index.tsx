import { useMemo } from 'react';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import palette from './palette';


// ----------------------------------------------------------------------

type ThemeProvider = {
  children: React.ReactNode,
};

export default function ThemeProvider(props:ThemeProvider) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(themeOptions);
//   theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}