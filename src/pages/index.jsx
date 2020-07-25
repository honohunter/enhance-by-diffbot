import 'typeface-encode-sans';
import 'typeface-titillium-web';

import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, CssBaseline } from '@material-ui/core';

import SEO from '../components/seo';
import Header from '../features/header';
import SectionA from '../features/sectionA';
import SectionB from '../features/sectionB';
import SectionC from '../features/sectionC';

let theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        height: 41,
        borderRadius: 3,
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
  },
  typography: {
    fontFamily: 'Encode Sans, Titillium Web',
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
      fontFamily: 'Titillium Web',
      fontWeight: 600,
      textTransform: 'none',
      borderWidth: 2,
    },
    caption: {
      fontSize: 10,
      fontFamily: 'Encode Sans',
      fontWeight: 600,
    },
  },
});

theme = responsiveFontSizes(theme);

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="LOCKER ROOM" />
      <CssBaseline />
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
    </ThemeProvider>
  );
};

export default IndexPage;
