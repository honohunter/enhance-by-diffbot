import React from 'react';
import { Typography, Container, Grid, AppBar, Toolbar, Box, makeStyles } from '@material-ui/core';

import Logo from '../assets/images/logo.svg';

const useStyles = makeStyles(theme => ({
  section: {
    [theme.breakpoints.down('xs')]: {
      backgroundColor: '#F7F9FB',
    },
  },
  toolbar: {
    padding: 0,
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 90,
      paddingRight: 90,
    },
  },
  logoWrapper: {
    width: 200,
  },
  logoImage: {
    width: 88,
    height: 17,
    marginTop: 5,
    marginLeft: -4,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar className={classes.toolbar}>
          <Container className={classes.container}>
            <Grid container direction="row" justify="space-between" alignItems="center" className={classes.logoWrapper}>
              <Box color="#17325E">
                <Typography variant="h5" component="div">
                  Enhance
                </Typography>
              </Box>
              <Box color="#19305A" marginTop="3px">
                <Typography variant="subtitle1" component="div">
                  by
                </Typography>
              </Box>
              <Logo className={classes.logoImage} />
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </section>
  );
};

export default Header;
