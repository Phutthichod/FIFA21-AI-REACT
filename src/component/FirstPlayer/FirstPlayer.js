import React, { useState, useEffect, useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { PlayerCard } from "./component";
import { store } from "../../store/FIFA";
export default function FirstPlayer() {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;
  const [players, setPlayers] = useState([]);
  const [size, setSize] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/firstTeam/${state.team}/${state.form}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state.constraints),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        let res1;
        res1 = JSON.parse(res.firstPlayer);
        let res2;
        res2 = JSON.parse(res.worst_player);
        let res3;
        res3 = JSON.parse(res.pearson);
        console.log(JSON.parse(res.worst_player));
        dispatch({ type: "set-pearson", data: res3 });
        // console.log(res);
        let name_worst_player;
        let j = 0;
        for (let i in res2[6]) {
          // console.log(res2[1][i]);
          if (j == 0) name_worst_player = res2[6][i];
          j++;
        }
        console.log(name_worst_player);
        res1 = res1.map((item) => {
          if (item.Name.trim() == name_worst_player.trim())
            return { ...item, worst_player: "pink" };
          return { ...item, worst_player: "" };
        });
        console.log(res1);
        if (state.form == "433")
          setSize([
            [4, [res1[8], res1[10], res1[9]]],
            [4, [res1[5], res1[7], res1[6]]],
            [3, res1.slice(1, 5)],
          ]);
        else if (state.form == "442")
          setSize([
            [3, [res1[10], res1[9]]],
            [3, [res1[7], res1[8], res1[5], res1[6]]],
            [2, res1.slice(1, 5)],
          ]);
        else {
          // console.log("setttttttttt", res1.slice(1, 4));
          setSize([
            [4, [res1[10], res1[9]]],
            [3, [res1[7], res1[8], res1[5], res1[6]]],
            [4, res1[4]],
            [4, res1.slice(1, 4)],
          ]);
        }
        setPlayers(res1);
      });
  }, [state.form, state.team, state.constraints]);
  return (
    <>
      <Typography variant="h5">11 FirstPlayer</Typography>
      <div style={{ marginBottom: 30 }} />
      {players.length >= 11 && (
        <Grid
          container
          direction="column"
          // alignItems="center"
          justify="center"
          spacing={5}
        >
          <Grid item>
            <Grid container alignItems="center" justify="center" spacing={2}>
              {size[0][1].map((item) => (
                <Grid item xs={size[0][0]}>
                  <PlayerCard info={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" spacing={2}>
              {size[1][1].map((item) => (
                <Grid item xs={size[1][0]}>
                  <PlayerCard info={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {state.form != "352" ? (
            <Grid item>
              <Grid container justify="center" spacing={2}>
                {size[2][1].map((item) => (
                  <Grid item xs={size[2][0]}>
                    <PlayerCard info={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ) : (
            <>
              <Grid item>
                <Grid container justify="center" spacing={2}>
                  <Grid item xs={4}>
                    <PlayerCard info={players[4]} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justify="center" spacing={2}>
                  {/* {size[3][1].map((item) => ( */}
                  <Grid item xs={4}>
                    <PlayerCard info={players[1]} />
                  </Grid>
                  <Grid item xs={4}>
                    <PlayerCard info={players[2]} />
                  </Grid>
                  <Grid item xs={4}>
                    <PlayerCard info={players[3]} />
                  </Grid>
                  {/* ))} */}
                </Grid>
              </Grid>
            </>
          )}
          <Grid item>
            <Grid container justify="center" pacing={2}>
              <Grid item xs={4}>
                <PlayerCard info={players[0]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
