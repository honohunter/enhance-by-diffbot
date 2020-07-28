import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, Typography, Container, Grid, Button, Box, Slide, Hidden } from '@material-ui/core';

import FullPixelImage from '../components/fullPixelImage';
import HArrow from '../assets/images/hArrow.svg';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 90,
      paddingRight: 90,
    },
  },
  FullPixelImage: {
    width: '100%',
    maxWidth: 500,
    filter: 'blur(8px)',
  },
  fullHeight: {
    height: '100%',
  },
  button: {
    height: 41,
  },
  section: {
    backgroundColor: '#F7F9FB',
    height: 490,
    [theme.breakpoints.down('sm')]: {
      height: 633,
    },
  },
  centerGrid: {
    [theme.breakpoints.up('md')]: {
      padding: '80px 0',
    },
    paddingBottom: 80,
    position: 'relative',
  },
  animatedDiv: {
    width: '100%',
    position: 'absolute',
  },
  arrow: {
    position: 'absolute',
    top: '-20px',
    left: '170px',
    zIndex: 100,
  },
  enhanceAnimation: {
    animation: '$blur 2s ease-out forwards',
  },
  '@keyframes blur': {
    '0%': { filter: 'blur(8px)' },
    '100%': { filter: 'blur(0px)' },
  },
}));

const SectionA = () => {
  const classes = useStyles();
  const [enhance, setEnhance] = useState(false);

  const handleButtonClick = () => {
    setEnhance(true);
  };

  return (
    <section className={classes.section}>
      <Container className={clsx(classes.fullHeight, classes.container)}>
        <Grid container className={classes.fullHeight}>
          <Grid item md={7} xs={12}>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="flex-start"
              className={clsx(classes.fullHeight, classes.centerGrid)}
            >
              <Box color="#00447A">
                <Typography variant="h1">
                  Turn a Name into <br /> an Account
                </Typography>
              </Box>
              <Typography variant="h6">
                <Box color="#5B7F9F" fontFamily="Titillium Web">
                  Get firmographic data and insights on every prospect, lead, and <br />
                  customer by enhancing your data with Diffbot
                </Box>
              </Typography>
              <Grid container justify="flex-start" spacing={2}>
                <Grid item>
                  <Button color="primary" variant="contained" disableElevation style={{ width: 182 }}>
                    Get Started
                  </Button>
                </Grid>
                <Grid item style={{ position: 'relative' }}>
                  <Button
                    color="primary"
                    variant="outlined"
                    disableElevation
                    style={{ width: 126 }}
                    onClick={handleButtonClick}
                  >
                    Enhance!
                  </Button>
                  <Hidden smDown>
                    <HArrow className={classes.arrow} />
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={clsx(classes.fullHeight, classes.centerGrid)}
            >
              <FullPixelImage
                level="clear"
                className={clsx(classes.FullPixelImage, enhance ? classes.enhanceAnimation : false)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionA;
