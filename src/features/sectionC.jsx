import React from 'react';
import clsx from 'clsx';
import { makeStyles, Typography, Container, Grid, Button, Box } from '@material-ui/core';

import DataInImage from '../assets/images/dataIn-image.svg';
import DataOutImage from '../assets/images/dataOut-image.svg';
import DataImage from '../components/dataImage';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 90,
      paddingRight: 90,
    },
  },
  FullPixelImage: {
    width: 545,
  },
  fullHeight: {
    height: '100%',
  },
  section: {
    backgroundColor: '#F7F9FB',
    height: 689,
  },
  centerGrid: {
    maxWidth: 535,
    height: 360,
    margin: 'auto',
    padding: '80px 0',
  },
  dataSection: {
    marginTop: -120,
    position: 'relative',
  },
  dataImage: {
    width: '100%',
    maxWidth: 600,
    zIndex: 10,
  },
  DataInImage: {
    position: 'absolute',
    left: 25,
    fill: '#d2dee8',
  },
  DataOutImage: {
    position: 'absolute',
    right: 25,
    fill: '#d2dee8',
  },
}));

const SectionC = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container className={clsx(classes.fullHeight, classes.container)}>
        <Grid container className={classes.fullHeight}>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
              className={clsx(classes.fullHeight, classes.centerGrid)}
            >
              <Box color="#00447A" textAlign="center">
                <Typography variant="h2">Garbage In, Data Out</Typography>
              </Box>
              <Box color="#5B7F9F" textAlign="center">
                <Typography variant="h6">
                  Automatically fix misspelled names, deduplicate records, and fill in missing details.
                </Typography>
              </Box>
              <div>
                <Button color="primary" variant="contained" disableElevation style={{ width: 126 }}>
                  Enhance!
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.dataSection}>
            <Grid container direction="row" justify="center" alignItems="center">
              <DataInImage className={classes.DataInImage} />
              <DataImage className={classes.dataImage} />
              <DataOutImage className={classes.DataOutImage} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionC;
