import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e5f5f1',
      100: '#b8e0d1',
      200: '#8acbb1',
      300: '#5cb791',
      400: '#2fa371',
      500: '#168957',
      600: '#106c45',
      700: '#0b4f34',
      800: '#063222',
      900: '#031711',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default theme;
