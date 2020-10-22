import React from "react";
import { Grid } from "@material-ui/core";
import { TeamPlayer, FirstPlayer, Recommendation } from "../../component";
export default function Main() {
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={4}>
        <TeamPlayer />
      </Grid>
      <Grid item xs={4}>
        <FirstPlayer />
      </Grid>
      <Grid item xs={4}>
        <Recommendation />
      </Grid>
    </Grid>
  );
}
