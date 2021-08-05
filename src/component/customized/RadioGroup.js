import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@material-ui/core";
import { genderItems } from "../state/state";
export default function RadioGroup({ name, label, onChange, value, items }) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {genderItems.map((gender) => (
          <FormControlLabel key={gender.id}
            value={gender.id}
            control={<Radio />}
            label={gender.title}
          ></FormControlLabel>
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
