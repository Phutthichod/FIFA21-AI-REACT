import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
export default function PlayerCard({ info }) {
  return (
    <>
      <Card style={{ backgroundColor: info.worst_player }}>
        {/* <CardContent> */}
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Grid
              container
              spacing={2}
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Grid item>
                <Typography>{info.Overall}</Typography>
              </Grid>
              <Grid item>
                <Typography>{info.NewPosition}</Typography>
              </Grid>
              {/* <Grid item xs={6}>
                <Typography>CF</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>24</Typography>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {info.Name}
          </Grid>
          <Grid item xs={12}>
            <Typography>{info.Nationality}</Typography>
          </Grid>
        </Grid>
        {/* </CardContent> */}
      </Card>
    </>
  );
}
