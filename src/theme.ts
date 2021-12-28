import { extendTheme, theme as base } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    brand: {
      accent: '#f85858',
      heading: '#e44550',
      paragraph: '#232264'
    }
  },
  fonts: {
    // set base fonts as fallback
    heading: `Libre Franklin, ${base.fonts?.heading}`,
    body: `Libre Franklin, ${base.fonts?.body}`
  },
  fontSizes: {
    h1: '40px',
    paragraph: '15px'
  },
  sizes: {
    container: {
      mobile: '450px'
    }
  }
});
