import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

export default function SelectFormat({ form, onFormChange }) {
  return (
    <>
      <Autocomplete
        defaultValue="433"
        style={{ backgroundColor: "white", width: 200, borderRadius: 5 }}
        onChange={onFormChange}
        options={form}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField {...params} label="Select Form" variant="outlined" />
        )}
      />
    </>
  );
}
