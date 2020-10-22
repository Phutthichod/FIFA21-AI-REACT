import React, { useContext, useRef } from "react";
import {
  Grid,
  TextField,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  responsiveFontSizes,
} from "@material-ui/core";
import { store } from "../../../../store/FIFA";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
export default function Constraint() {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;
  const min_price = useRef(-1);
  const max_price = useRef(-1);
  const min_wage = useRef(-1);
  const max_wage = useRef(-1);
  const min_age = useRef(-1);
  const max_age = useRef(-1);
  const min_overall = useRef(-1);
  const max_overall = useRef(-1);
  const onSearch = () => {
    let body = {
      min_price:
        Number(min_price.current.value) == 0
          ? -1
          : Number(min_price.current.value),
      max_price:
        Number(max_price.current.value) == 0
          ? -1
          : Number(max_price.current.value),
      min_wage:
        Number(min_wage.current.value) == 0
          ? -1
          : Number(min_wage.current.value),
      max_wage:
        Number(max_wage.current.value) == 0
          ? -1
          : Number(max_wage.current.value),
      min_age:
        Number(min_age.current.value) == 0 ? -1 : Number(min_age.current.value),
      max_age:
        Number(max_age.current.value) == 0 ? -1 : Number(max_age.current.value),
      min_overall:
        Number(min_overall.current.value) == 0
          ? -1
          : Number(min_overall.current.value),
      max_overall:
        Number(max_overall.current.value) == 0
          ? -1
          : Number(max_overall.current.value),
    };
    // console.log(body);
    dispatch({ type: "set-constraints", data: body });
    // fetch("http://127.0.0.1:5000/constraints", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // }).then((res) => console.log(res));
  };
  return (
    <div style={{ width: "100%" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Constraints</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            alignItems="center"
          >
            <Grid item>
              <Grid container alignItems="baseline" direction="row">
                <Typography>Tranferprice</Typography>
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: min_price }} label="min" />
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: max_price }} label="max" />
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="baseline" direction="row">
                <Typography>Wage</Typography>
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: min_wage }} label="min" />
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: max_wage }} label="max" />
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="baseline" direction="row">
                <Typography>Age</Typography>
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: min_age }} label="min" />
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: max_age }} label="max" />
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="baseline" direction="row">
                <Typography>Overall</Typography>
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: min_overall }} label="min" />
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: max_overall }} label="max" />
              </Grid>
            </Grid>
            <Grid container spacing={2} justify="flex-end">
              <Button onClick={onSearch}>Search</Button>
              <Button>Clear</Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
