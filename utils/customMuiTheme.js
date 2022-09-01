import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    // mode: themeMode,
    primary: {
      main: '#00c185',
    },
    secondary: {
      main: '#014351',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'IRANSansfa',
      color: 'white',
    },
  },
});
