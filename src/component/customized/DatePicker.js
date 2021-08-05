import React from "react";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
export default function DatePicker() {
  return (
    <MuiPickersUtilsProvider>
      <KeyboardDatePicker></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
}
