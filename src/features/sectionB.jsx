import React, { useState } from 'react';
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
  Paper,
  Divider,
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
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 30,
    },
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
      // height: 612,
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
    padding: 10,
  },
  accordionSummaryFocused: {
    backgroundColor: 'unset !important',
  },
  searchWrapper: {
    width: '100%',
  },
  searchInput: {
    color: '#b8d3ee',
    fontSize: 20,
  },
  searchInputUnderline: {
    '&:before': {
      borderBottomColor: '#b8d3ee',
    },
    '&:after': {
      borderBottomColor: '#b8d3ee',
    },
  },
  paper: {
    boxShadow: '0 1px 2px rgba(18, 38, 63, 0.03)',
    borderRadius: 8,
    border: '1px solid #edf2f9',
    padding: 30,
  },
  divider: {
    margin: '20px 0 ',
  },
  spacer: {
    paddingBottom: 10,
  },
  chip: {
    padding: 5,
    backgroundColor: '#e9eff9',
  },
}));

const SectionB = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const [enhance, setEnhance] = useState(false);

  const handelButtonClick = () => {
    setEnhance(true);
  };

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
              <Accordion square expanded={enhance} className={classes.accordion}>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  className={classes.accordionSummary}
                  classes={{
                    focused: classes.accordionSummaryFocused,
                  }}
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
                          classes={{ underline: classes.searchInputUnderline }}
                          className={classes.searchInput}
                          defaultValue="Apple"
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
                        <Button
                          color="primary"
                          variant="contained"
                          fullWidth
                          disableElevation
                          onClick={handelButtonClick}
                        >
                          Enhance!
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Paper elevation={0} className={classes.paper}>
                    <Grid container>
                      <Grid item xs={12} md={2}>
                        <Grid container>
                          <img
                            src="https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png"
                            style={{ maxWidth: '66px', marginBottom: '20px' }}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <Box color="#00447a">
                          <Typography variant="h6">Apple, Inc.</Typography>
                        </Box>

                        <Divider className={classes.divider} />
                        <div className={classes.spacer}>
                          <Typography variant="caption">SUMMARY</Typography>
                          <Typography>
                            Apple Inc. designs, manufactures, and markets personal computers and related personal
                            computing and mobile communication devices along with a variety of related software,
                            services, peripherals, and networking solutions. Apple sells its products worldwide through
                            its online stores, its retail stores, its direct sales force, third-party wholesalers, and
                            resellers.
                          </Typography>
                        </div>
                        <Grid container spacing={2}>
                          <Grid item xs={6} className={classes.spacer}>
                            <Typography variant="caption">LOCATION</Typography>
                            <Typography>One Apple Park Way, Cupertino, 95014, California, United States</Typography>
                          </Grid>
                          <Grid item xs={6} className={classes.spacer}>
                            <Typography variant="caption">CEO</Typography>
                            <Typography>Tim Cook</Typography>
                          </Grid>
                          <Grid item xs={6} className={classes.spacer}>
                            <Typography variant="caption">FOUNDED</Typography>
                            <Typography>1997</Typography>
                          </Grid>
                          <Grid item xs={6} className={classes.spacer}>
                            <Typography variant="caption">EMPLOYEES</Typography>
                            <Typography>~137,000</Typography>
                          </Grid>
                          <Grid item xs={12} className={classes.spacer}>
                            <Typography variant="caption" component="div">
                              INDUSTRIES
                            </Typography>
                            <Grid container spacing={1}>
                              <Grid item>
                                <Typography variant="subtitle2" className={classes.chip}>
                                  display technology companies
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle2" className={classes.chip}>
                                  computer hardware companies
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle2" className={classes.chip}>
                                  mobile phone manufacturers
                                </Typography>
                              </Grid>

                              <Grid item>
                                <Typography variant="subtitle2" className={classes.chip}>
                                  manufacturing companies
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle2" className={classes.chip}>
                                  electronics companies
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle2" className={classes.chip}>
                                  technology companies
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle2" className={classes.chip}>
                                  engineering companies
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle2" className={classes.chip}>
                                  computer companies
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
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
