import React from 'react';
import clsx from 'clsx';
import { makeStyles, useMediaQuery, Typography, Container, Grid, Button, Hidden, Box } from '@material-ui/core';

import Rectangle from '../assets/images/rectangle.svg';
import DevImage from '../components/devImage';

const useStyles = makeStyles(theme => ({
  rectangle: {
    left: 0,
    marginTop: -360,
    zIndex: -1,
    position: 'relative',
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 90,
      paddingRight: 90,
    },
  },
  relativeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    [theme.breakpoints.up('xl')]: {
      top: 80,
    },
  },
  fullHeight: {
    height: '100%',
  },
  section: {
    backgroundColor: '#f7f9fb',
    marginTop: 200,
    height: 300,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginTop: 100,
    },
    [theme.breakpoints.up('xl')]: {
      height: 400,
    },
  },
  textSection: {
    minHeight: 200,
  },
  centerGrid: {
    padding: '80px 0',
  },
}));

const SectionE = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <section className={classes.section}>
      <Rectangle className={classes.rectangle} />
      <Container className={clsx(classes.fullHeight, classes.container, classes.relativeContainer)}>
        <Grid container>
          <Hidden smDown>
            <Grid item md={5} xs={12}>
              <DevImage />
            </Grid>
          </Hidden>

          <Grid item md={7} xs={12}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems={isSmallScreen ? 'center' : 'flex-end'}
              className={clsx(classes.fullHeight, classes.textSection)}
            >
              <Box color="#00447A" textAlign={isSmallScreen ? 'center' : 'end'}>
                <Typography variant="h2">Developers? We’ve got you.</Typography>
              </Box>
              <Typography variant="h6">
                <Box color="#5B7F9F" fontFamily="Titillium Web" textAlign="end">
                  Try our easy-to-use REST API to build <br />a completely custom solution.
                </Box>
              </Typography>
              <Button color="primary" variant="contained" disableElevation style={{ width: 141 }}>
                View Docs
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionE;
