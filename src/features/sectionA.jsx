import React from 'react';
import clsx from 'clsx';
import { makeStyles, Typography, Container, Grid, Button, Box } from '@material-ui/core';

import FullPixelImage from '../components/fullPixelImage';

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
  },
}));

const SectionA = () => {
  const classes = useStyles();
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
                <Grid item>
                  <Button color="primary" variant="outlined" disableElevation style={{ width: 126 }}>
                    Enhance!
                  </Button>
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
              <FullPixelImage className={classes.FullPixelImage} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionA;
