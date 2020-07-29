import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, Typography, Container, Grid, Button, Box } from '@material-ui/core';

import DataInImage from '../assets/images/dataIn-image.svg';
import DataOutImage from '../assets/images/dataOut-image.svg';
import VArrow from '../assets/images/vArrow.svg';

import DataTable from '../components/dataTable';

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
  },
  centerGrid: {
    maxWidth: 535,
    height: 360,
    margin: 'auto',
    padding: '80px 0',
  },
  dataSection: {
    position: 'relative',
    paddingBottom: 100,
  },
  dataImage: {
    width: '100%',
    maxWidth: 600,
    zIndex: 10,
  },
  DataInImage: {
    position: 'absolute',
    left: 5,
    fill: '#d2dee8',
  },
  DataOutImage: {
    position: 'absolute',
    right: 5,
    fill: '#d2dee8',
  },
  arrow: {
    position: 'absolute',
    bottom: -70,
    right: -40,
  },
}));

const SectionC = () => {
  const classes = useStyles();
  const [enhance, setEnhance] = useState(false);

  const handelButtonClick = () => {
    setEnhance(true);
  };

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
                <Typography variant="h6" >
                  Automatically fix misspelled names, deduplicate records, and fill in missing details.
                </Typography>
              </Box>
              <div style={{ position: 'relative' }}>
                <Button
                  color="primary"
                  variant="contained"
                  disableElevation
                  style={{ width: 126 }}
                  onClick={handelButtonClick}
                >
                  Enhance!
                </Button>
                <VArrow className={classes.arrow} />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.dataSection}>
            <Grid container direction="row" justify="center" alignItems="center">
              <DataInImage className={classes.DataInImage} />
              <DataTable animate={enhance} />
              <DataOutImage className={classes.DataOutImage} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionC;
