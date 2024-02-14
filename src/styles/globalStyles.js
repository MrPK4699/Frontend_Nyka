// styles/globalStyles.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        color: '#333',
        lineHeight: '1.6',
      },
      a: {
        color: 'blue',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
});

export default theme;
