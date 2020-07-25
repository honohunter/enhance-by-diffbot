import React from 'react';
import clsx from 'clsx';
import { makeStyles, useMediaQuery, Typography, Container, Grid, Button, Hidden, Box } from '@material-ui/core';

import DevImage from '../components/devImage';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 90,
      paddingRight: 90,
    },
  },
  relativeContainer: {
    position: 'relative',
    bottom: 80,
    [theme.breakpoints.down('sm')]: {
      bottom: 40,
    },
  },
  fullHeight: {
    height: '100%',
  },
  section: {
    height: 200,
    backgroundColor: '#f7f9fb',
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
      <Container className={clsx(classes.fullHeight, classes.container)}>
        <Grid container className={classes.relativeContainer}>
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
              <Box color="#00447A" textAlign="end">
                <Typography variant="h2">Developers? We’ve got you.</Typography>
              </Box>
              <Typography variant="h6">
                <Box color="#5B7F9F" fontFamily="Titillium Web" textAlign="end">
                  Try our easy-to-use REST API to build <br />a completely custom solution.
                </Box>
              </Typography>
              <Button color="primary" variant="contained" disableElevation style={{ width: 182 }}>
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
