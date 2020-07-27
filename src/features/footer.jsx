import React from 'react';
import clsx from 'clsx';
import { makeStyles, Typography, Container, Grid, Button, Box } from '@material-ui/core';

import Logo from '../components/logo';

const useStyles = makeStyles(theme => ({
  section: {
    backgroundColor: '#e9edf5ff',
    height: 450,
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 90,
      paddingRight: 90,
    },
  },
  gridCenter: {
    paddingTop: 50,
  },
  fullHeight: {
    height: '100%',
  },
  logoImage: {
    width: 150,
    height: 29,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container className={clsx(classes.fullHeight, classes.container)}>
        <Grid container className={classes.fullHeight}>
          <Grid container justify="space-between" className={clsx(classes.fullHeight)} spacing={5}>
            <Grid item xs={12} md={7}>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={clsx(classes.gridCenter)}
                >
                  <Grid item>
                    <Grid container direction="column" justify="space-between">
                      <Typography variant="body1">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column" justify="space-between">
                      <Typography variant="body1">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column" justify="space-between">
                      <Typography variant="body1">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column" justify="space-between">
                      <Typography variant="body1">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={clsx(classes.gridCenter)}
                >
                  <Grid item>
                    <Grid container direction="column" justify="space-between">
                      <Typography variant="body1">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column" justify="space-between">
                      <Typography variant="body1">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column" justify="space-between">
                      <Typography variant="body1">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column" justify="space-between">
                      <Typography variant="body1">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                      <Typography variant="body2">PRODUCTS</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="flex-start"
                className={clsx(classes.gridCenter)}
              >
                <div>
                  <Logo className={classes.logoImage} />
                  <Typography variant="body1">
                    Get firmographic data and insights on every prospect, lead, and customer by enhancing your data with
                    Diffbot
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1">CONNECT WITH US</Typography>
                </div>
                <div>
                  <Typography variant="body1">CONNECT WITH US</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
