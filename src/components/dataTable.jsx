import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#f9f9f9',
    color: theme.palette.common.black,
    padding: 0,
    borderRight: '1px solid rgba(224, 224, 224, 1)',
    borderTop: '1px solid rgba(224, 224, 224, 1)',
    '&:first-child': {
      backgroundColor: '#ffffff',
      borderTop: 'unset',
    },
  },
  body: {
    fontSize: 14,
    fontWeight: 'inherit',
    borderRight: '1px solid rgba(224, 224, 224, 1)',
    '&:first-child': {
      backgroundColor: '#f9f9f9',
      width: 30,
      padding: 5,
      borderLeft: '1px solid rgba(224, 224, 224, 1)',
      fontWeight: 400,
    },
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:first-child': {
      backgroundColor: '#fffaeb',
      fontWeight: 700,
    },
  },
}))(TableRow);

function createData(id, company, website, city, country) {
  return { id, company, website, city, country };
}

const rows = [
  createData(1, 'Company Name', 'Website', 'City', 'Country'),
  createData(2, 'Tesle', 'Palo Atlo', '', ''),
  createData(3, 'Fisher Price', '', '', 'United Statess'),
  createData(4, 'BANDAI NAMCO', '', '', 'Japan'),
  createData(4, 'Bandai Namco holding', '', 'Tokyo', 'Japan'),
];

const useStyles = makeStyles({
  paper: {
    zIndex: 100,
    maxWidth: 720,
  },

  table: {
    width: 660,
    height: 200,
    margin: 'auto',
  },
  underLine: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: 'red',
  },
  typing: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    margin: 0,
    // letterSpacing: '0.15em',
    animation: `$typing 3.5s steps(30, end)`,
    width: 'fit-content',
  },
  panel: {
    padding: '10px 20px',
    display: 'flex',
    backgroundColor: '#f3f3f3',
    width: 720,
  },
  dot: {
    width: 8,
    height: 8,
    marginRight: 6,
    borderRadius: '50%',
  },
  container: {
    padding: 25,
  },
  '@keyframes typing': {
    '0%': { width: 0 },
    '100%': { width: '100%' },
  },
});

export default function DataTable({ animate }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.panel}>
        <span className={classes.dot} style={{ backgroundColor: '#fc5959' }} />
        <span className={classes.dot} style={{ backgroundColor: '#fec030' }} />
        <span className={classes.dot} style={{ backgroundColor: '#36ce42' }} />
      </div>
      <TableContainer elevation={0} component={Paper} className={classes.paper}>
        <div className={classes.container}>
          <Table aria-label="customized table" size="small" className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" />
                <StyledTableCell align="center">A</StyledTableCell>
                <StyledTableCell align="center">B</StyledTableCell>
                <StyledTableCell align="center">C</StyledTableCell>
                <StyledTableCell align="center">D</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell align="center">1</StyledTableCell>
                <StyledTableCell align="left">Company Name</StyledTableCell>
                <StyledTableCell align="left">Website</StyledTableCell>
                <StyledTableCell align="left">City</StyledTableCell>
                <StyledTableCell align="left">Country</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell align="center">2</StyledTableCell>
                <StyledTableCell align="left">
                  {animate ? (
                    <div className={classes.typing}>Tesla</div>
                  ) : (
                    <>
                      <span className={classes.underLine}>Tesle</span>
                    </>
                  )}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {animate ? (
                    <div className={classes.typing}>tesla.com</div>
                  ) : (
                    <>
                      Palo <span className={classes.underLine}>Atlo</span>
                    </>
                  )}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {animate ? <div className={classes.typing}>Palo Atlo</div> : ''}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {animate ? <div className={classes.typing}>United States</div> : ''}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell align="center">3</StyledTableCell>
                <StyledTableCell align="left">Fisher Price</StyledTableCell>
                <StyledTableCell align="left">
                  {animate ? <div className={classes.typing}>fisher-price.com</div> : ''}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {animate ? <div className={classes.typing}>New York</div> : ''}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {animate ? (
                    <div className={classes.typing}>United States</div>
                  ) : (
                    <>
                      United <span className={classes.underLine}>States</span>
                    </>
                  )}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell align="center">4</StyledTableCell>
                <StyledTableCell align="left">
                  {animate ? <div className={classes.typing}>BANDAI NAMCO Entertainment</div> : 'BANDAI NAMCO'}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {animate ? <div className={classes.typing}>bandainamcoent.com</div> : ''}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {animate ? <div className={classes.typing}>Tokyo</div> : ''}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {animate ? <div className={classes.typing}>Japan</div> : 'Japan'}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell align="center">5</StyledTableCell>
                <StyledTableCell align="left">{animate ? '' : 'Bandai Namco holding'}</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
                <StyledTableCell align="left">{animate ? '' : 'Tokyo'}</StyledTableCell>
                <StyledTableCell align="left">{animate ? '' : 'Japan'}</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </>
  );
}
