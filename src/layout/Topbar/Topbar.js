import React, { useEffect, useState, useContext } from "react";
import { AppBar, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SelectTeam, SelectForm } from "./component";
import { store } from "../../store/FIFA";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Topbar() {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;
  const classes = useStyles();
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState([]);
  const [format, setFormat] = useState([]);
  const onFormChange = (e, val) => {
    if (val) dispatch({ type: "set-form", data: val });
  };
  //   const [players, setPlayers] = useState([]);
  const form = ["433", "442", "352"];
  useEffect(() => {
    fetch("http://127.0.0.1:5000/club")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        res = res.slice(12);
        res = res.map((item) => {
          return { title: item };
        });
        res = res.filter((item) => typeof item.title != typeof 1);
        setTeams(res);
      });
  }, []);
  const onSelectTeam = (e, val) => {
    console.log(val);
    if (val) dispatch({ type: "set-team", data: val.title });
  };
  // const search = () => {
  //   dispatch({ type: "set-form", data: data });
  // };
  return (
    <div className={classes.root}>
      <AppBar style={{ padding: 5 }}>
        <Grid container justify="flex-start" alignItems="center">
          <Typography variant="h6" align="left" className={classes.title}>
            FIFA21 Recomendertion
          </Typography>
          <SelectTeam teams={teams} onSelectTeam={onSelectTeam} />
          <div style={{ marginRight: 10 }} />
          <SelectForm form={form} onFormChange={onFormChange} />
          {/* <div style={{ marginRight: 10 }} /> */}
          {/* <Button onClick={search} variant="contained">
            Search
          </Button> */}
        </Grid>
      </AppBar>
    </div>
  );
}
