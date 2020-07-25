import React from 'react';
import { Typography, Container, Grid, AppBar, Toolbar, Box, makeStyles } from '@material-ui/core';

import Logo from '../components/logo';

const useStyles = makeStyles(theme => ({
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
    height: 25,
    marginTop: 5,
    marginLeft: -4,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
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
              <Typography variant="caption" component="div">
                by
              </Typography>
            </Box>
            <Logo className={classes.logoImage} />
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
