import React from "react";
import { Constraints, Pearson } from "./component";
import { Grid, Typography } from "@material-ui/core";
export default function Recommendation() {
  return (
    <Grid container direction="column">
      <Typography variant="h6">Top 5 recommendations</Typography>
      <div style={{ marginBottom: 35 }} />
      <Constraints />
      <Pearson />
    </Grid>
  );
}
