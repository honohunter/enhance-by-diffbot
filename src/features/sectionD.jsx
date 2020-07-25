import React from 'react';
import clsx from 'clsx';
import { makeStyles, useMediaQuery, Typography, Container, Grid, Card, CardContent, Box } from '@material-ui/core';

import Rectangle from '../assets/images/rectangle.svg';
import ExcelLogo from '../components/excelLogo';
import GoogleLogo from '../components/googleLogo';
import TableauLogo from '../components/tableauLogo';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 90,
      paddingRight: 90,
    },
  },
  fullHeight: {
    height: '100%',
  },
  section: {
    // height: 200,
  },
  centerGrid: {
    padding: '80px 0',
  },
  rectangle: {
    left: 0,
    marginTop: -65,
    marginBottom: -10,
  },
  paper: {
    width: 180,
    height: 180,
  },
  cardContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#5a87b0',
    fontWeight: 500,
  },
  logoContainer: {
    [theme.breakpoints.only('xs')]: {
      zoom: 0.45,
    },
    [theme.breakpoints.only('sm')]: {
      zoom: 0.7,
    },
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  excelLogo: {
    width: 80,
  },
  googleLogo: {
    width: 58,
  },
  tableauLogo: {
    width: 72,
  },
}));

const SectionD = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <section className={classes.section}>
      <Container className={clsx(classes.fullHeight, classes.container)}>
        <Grid container className={classes.fullHeight}>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems={isSmallScreen ? 'center' : 'flex-start'}
              className={clsx(classes.centerGrid)}
            >
              <Box color="#054074" paddingBottom={4} textAlign={isSmallScreen ? 'center' : 'start'}>
                <Typography variant="h2">
                  Available in Your <br />
                  Favorite App
                </Typography>
              </Box>
              <Grid
                container
                direction="row"
                spacing={3}
                justify={isSmallScreen ? 'center' : 'flex-start'}
                className={classes.logoContainer}
              >
                <Grid item>
                  <Card elevation={3} className={classes.paper}>
                    <CardContent className={classes.cardContent}>
                      <ExcelLogo className={clsx(classes.logo, classes.excelLogo)} />
                      <Typography>Microsoft Excel</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card elevation={3} className={classes.paper}>
                    <CardContent className={classes.cardContent}>
                      <GoogleLogo className={clsx(classes.logo, classes.googleLogo)} />
                      <Typography>Google Sheets</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card elevation={3} className={classes.paper}>
                    <CardContent className={classes.cardContent}>
                      <TableauLogo className={clsx(classes.logo, classes.tableauLogo)} />
                      <Typography>Tableau</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Rectangle className={classes.rectangle} />
    </section>
  );
};

export default SectionD;
