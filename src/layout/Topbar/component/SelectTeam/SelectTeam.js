import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
export default function SelectTeam({ teams, onSelectTeam }) {
  return (
    <>
      <Autocomplete
        defaultValue={{ title: "Manchester United" }}
        style={{ backgroundColor: "white", width: 300, borderRadius: 5 }}
        onChange={onSelectTeam}
        options={teams}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="SelectTeam" variant="outlined" />
        )}
      />
    </>
  );
}
