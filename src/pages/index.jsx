import 'typeface-encode-sans';
import 'typeface-titillium-web';

import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, CssBaseline } from '@material-ui/core';

import SEO from '../components/seo';
import Header from '../features/header';
import SectionA from '../features/sectionA';
import SectionB from '../features/sectionB';
import SectionC from '../features/sectionC';
import SectionD from '../features/sectionD';
import SectionE from '../features/sectionE';
import SectionF from '../features/sectionF';

let theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        height: 41,
        borderRadius: 3,
      },
    },
    MuiPaper: {
      elevation3: {
        boxShadow:
          '0px 3px 3px -2px rgba(97, 139, 176,0.2), 0px 3px 4px 0px rgba(97, 139, 176,0.14), 0px 1px 8px 0px rgba(97, 139, 176,0.12)',
      },
    },
  },
  palette: {
    background: {
      default: 'white',
    },
    primary: {
      main: '#2C7BE5',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Encode Sans, Encode Sans Medium, Titillium Web',
    h1: {
      fontSize: 55,
      fontFamily: 'Encode Sans',
      fontWeight: 600,
      lineHeight: 1.09,
    },
    h2: {
      fontSize: 42,
      fontFamily: 'Encode Sans',
      fontWeight: 600,
      paddingBottom: 10,
    },
    h5: {
      fontSize: 24,
      fontFamily: 'Titillium Web',
      fontWeight: 600,
    },
    h6: {
      fontSize: 20,
      fontFamily: 'Encode Sans',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    button: {
      fontSize: 15,
      fontFamily: 'Encode Sans',
      fontWeight: 600,
      textTransform: 'none',
      borderWidth: 2,
    },
    subtitle1: {
      fontSize: 10,
      fontFamily: 'Encode Sans',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 10,
      fontFamily: 'Encode Sans',
      fontWeight: 600,
      color: '#60759C',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    },
    caption: {
      fontSize: 10,
      fontFamily: 'Encode Sans',
      fontWeight: 600,
      color: '#95aac9',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: 13,
      color: '#5b80a0',
      padding: '4px 0',
      fontWeight: 500,
    },
  },
});

theme = responsiveFontSizes(theme, { factor: 3 });

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Enhance" />
      <CssBaseline />
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default IndexPage;
