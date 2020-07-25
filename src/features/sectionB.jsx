import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  useMediaQuery,
  Typography,
  Container,
  Grid,
  Button,
  Box,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Hidden,
} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

import SectionBImage from '../assets/images/sectionB-image.svg';
import SectionBMobileImage from '../assets/images/sectionB-mobile-image.svg';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 90,
      paddingRight: 90,
    },
  },
  fullHeight: {
    height: '100%',
    paddingBottom: 30,
  },

  centerGrid: {
    [theme.breakpoints.up('md')]: {
      paddingTop: 100,
      paddingBottom: 150,
    },
  },
  section: {
    backgroundColor: '#00447A',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      height: 612,
    },
  },
  SectionBImage: {
    bottom: 4,
    position: 'relative',
    width: '100%',
  },
  accordion: {
    maxWidth: 787,
    borderRadius: 8,
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      bottom: 45,
    },
  },
  accordionSummary: {
    padding: '11px 35px',
  },
  searchWrapper: {
    width: '100%',
  },
}));

const SectionB = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <section className={classes.section}>
      <Container className={clsx(classes.fullHeight, classes.container)}>
        <Grid container className={classes.fullHeight}>
          <Grid item md={5} xs={12}>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="center"
              className={classes.fullHeight}
            >
              <Hidden smDown>
                <SectionBImage className={classes.SectionBImage} />
              </Hidden>

              <Hidden mdUp>
                <SectionBMobileImage />
              </Hidden>
            </Grid>
          </Grid>
          <Grid item md={7} xs={12}>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems={isSmallScreen ? 'center' : 'flex-end'}
              className={clsx(classes.fullHeight, classes.centerGrid)}
            >
              <Box color="#ffffff" textAlign={isSmallScreen ? 'center' : 'end'}>
                <Typography variant="h2">
                  70+ Data Points Across
                  <br /> 200M+ Global Organizations
                </Typography>
              </Box>
              <Box color="#b8d3ee" textAlign={isSmallScreen ? 'center' : 'end'}>
                <Typography variant="h6">
                  Learn everything the internet knows about your subject, powered by the world’s largest knowledge graph
                  of the public web
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="column" justify="center" alignItems="center">
              <Accordion square expanded={false} className={classes.accordion}>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  className={classes.accordionSummary}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={9}>
                      <FormControl className={classes.searchWrapper}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                          <Box fontWeight={700} fontSize={15} color="#00467d">
                            TRY A COMPANY NAME
                          </Box>
                        </InputLabel>
                        <Input
                          id="input-with-icon-adornment"
                          value="Appel"
                          startAdornment={
                            <InputAdornment position="start">
                              <SearchOutlined />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Grid container alignItems="center" direction="column">
                        <Button color="primary" variant="contained" fullWidth disableElevation >
                          Enhance!
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionB;
