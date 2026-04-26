import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#fff0f6',
      100: '#ffd6e7',
      200: '#ffb3d1',
      300: '#ff8fbc',
      400: '#ff5fa0',
      500: '#e91e63',
      600: '#c2185b',
      700: '#9c144a',
      800: '#6d1036',
      900: '#450a22',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default theme;