import React from 'react';
import clsx from 'clsx';
import { makeStyles, Typography, Container, Grid, Button, Box } from '@material-ui/core';

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
    width: 200,
  },
  section: {
    backgroundColor: '#00447A',
  },
  centerGrid: {
    padding: '80px 0',
    height: 350,
  },
}));

const SectionF = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container className={clsx(classes.fullHeight, classes.container)}>
        <Grid container className={classes.fullHeight}>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
            className={clsx(classes.fullHeight, classes.centerGrid)}
          >
            <Box color="#ffffff" textAlign="center">
              <Typography variant="h2">Try Enhance Today</Typography>
            </Box>
            <Box color="#b8d3ee" textAlign="center">
              <Typography variant="h6">Plans start at $49.99 a month for 500 enhanced records</Typography>
            </Box>
            <Button disableElevation color="secondary" variant="contained" className={classes.button}>
              <Box color="#00447A" textAlign="center">
                Get Started
              </Box>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionF;
