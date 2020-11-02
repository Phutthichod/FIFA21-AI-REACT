import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { store } from "../../store/FIFA";
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(name, position, overall, age, nationality, info) {
  return {
    name,
    position,
    overall,
    age,
    nationality,
    info: [info],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.position}</TableCell>
        <TableCell align="right">{row.overall}</TableCell>
        <TableCell align="right">{row.age}</TableCell>
        <TableCell align="right">{row.nationality}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                info
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Potential</TableCell>
                    <TableCell>Weight</TableCell>
                    <TableCell>Height</TableCell>
                    <TableCell align="right">Wage (eu)</TableCell>
                    <TableCell align="right">Value (eu)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.info.map((infoRow, i) => (
                    <TableRow key={i}>
                      <TableCell>{infoRow[4]}</TableCell>
                      <TableCell>{infoRow[0]}</TableCell>
                      <TableCell>{infoRow[1]}</TableCell>
                      <TableCell align="right">{infoRow[2]}</TableCell>
                      <TableCell align="right">{infoRow[3]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TeamPlayer() {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("not effect", state);
  useEffect(() => {
    setLoading(true);
    console.log("effect", state);
    fetch("http://localhost:5000/player/" + state.team)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const rows = res.map((item) =>
          createData(
            item.Name,
            item.player_positions.join(" , "),
            item.Overall,
            item.Age,
            item.Nationality,
            [item.Weight, item.Height, item.Wage, item.Value, item.Potential]
          )
        );
        setRows(rows);
        setLoading(false);
      });
  }, [state.team]);
  return (
    <>
      {loading ? (
        <Typography>loading ......</Typography>
      ) : (
        <>
          <Typography variant="h5">Team Player</Typography>
          <div style={{ marginBottom: 25 }} />
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Pos</TableCell>
                  <TableCell align="right">Ovr</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Nat</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}
