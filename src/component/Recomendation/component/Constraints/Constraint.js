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
  const onClearSearch = () => {
    min_price.current.value = "";
    max_price.current.value = "";
    max_wage.current.value = "";
    min_wage.current.value = "";
    max_age.current.value = "";
    min_age.current.value = "";
    max_overall.current.value = "";
    min_overall.current.value = "";
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
            direction="row"
            justify="center"
            spacing={2}
            alignItems="stretch"
          >
            <Grid item xs={3}>
              <Grid container alignItems="baseline" direction="column">
                <div style={{ marginRight: 5 }} />
                <TextField disabled label="Tranferprice" />
                <div style={{ marginRight: 5 }} />
                <TextField disabled label="Wage" />
                <div style={{ marginRight: 5 }} />
                <TextField disabled label="Age" />
                <div style={{ marginRight: 5 }} />
                <TextField disabled label="Overall" />
                {/* <div style={{ marginRight: 5 }} />
                <Typography>Tranferprice</Typography>
                <div style={{ marginRight: 5 }} />
                <Typography>Wage</Typography>
                <div style={{ marginRight: 5 }} />
                <Typography>Age</Typography>
                <div style={{ marginRight: 5 }} />
                <Typography>Overall</Typography> */}
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container alignItems="baseline" direction="column">
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: min_price }} label="min" />
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: min_wage }} label="min" />
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: min_age }} label="min" />
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: min_overall }} label="min" />
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container alignItems="baseline" direction="row">
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: max_price }} label="max" />
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: max_wage }} label="max" />
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: max_age }} label="max" />
                <div style={{ marginRight: 5 }} />
                <TextField inputProps={{ ref: max_overall }} label="max" />
              </Grid>
            </Grid>
            {/* <Grid item>
              <Grid container alignItems="baseline" direction="row">
                
            
               
              </Grid>
            </Grid> */}
            <Grid
              style={{ marginTop: 15, padding: 15 }}
              container
              spacing={2}
              alignItems="center"
              justify="flex-end"
            >
              <Button
                style={{ marginRight: 5 }}
                variant="contained"
                color="primary"
                onClick={onSearch}
              >
                Search
              </Button>
              <Button
                variant="contained"
                color="inherit"
                onClick={onClearSearch}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
