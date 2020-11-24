/** @format */

import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#F8B34C",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    color: "#E9E7E7",
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(248, 179, 76, 0.41)",
      //   opacity: "30%",
    },
  },
}))(TableRow);

function createData(yaag, earned, points, level) {
  return { yaag, earned, points, level };
}

const rows = [
  createData(
    "Phool",
    159,
    6.0,
    <Rating name="customized-10" defaultValue={2} max={5} />
  ),
  createData(
    "Bubble Nut Wash",
    237,
    9.0,
    <Rating name="customized-10" defaultValue={2} max={5} />
  ),
  createData(
    "Hasiru Dala",
    262,
    16.0,
    <Rating name="customized-10" defaultValue={2} max={5} />
  ),
  createData(
    "Poorti",
    305,
    3.7,
    <Rating name="customized-5" defaultValue={2} max={5} />
  ),
  createData(
    "Toctopus",
    356,
    16.0,
    <Rating name="customized-5" defaultValue={2} max={5} />
  ),
];

const useStyles = makeStyles({
  table: {
    // display: "flex",
    // justifyContent: "center",
    flexDirection: "column",
    // alignItems: "center",
    minWidth: 700,
  },
});

export const CustomizedTables = () => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>YAAG</StyledTableCell>
            <StyledTableCell>EARNED</StyledTableCell>
            <StyledTableCell>POINTS</StyledTableCell>
            <StyledTableCell>LEVEL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.yaag}>
              <StyledTableCell component="th" scope="row">
                {row.yaag}
              </StyledTableCell>
              <StyledTableCell style={{ color: "#000" }}>
                {row.earned}
              </StyledTableCell>
              <StyledTableCell>{row.points}</StyledTableCell>
              <StyledTableCell>{row.level}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
