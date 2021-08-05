import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(2),
    },
    "& .MuiInputBase-root": {
      marginBottom: theme.spacing(1),
    },
  },
  button: {
    background: "#9bc400",
    marginTop: theme.spacing(1),
  },
  div: {
    marginBottom: theme.spacing(1),
  },
}));
