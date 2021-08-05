import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({ 
  googleIcon: {
    height: "15px",
    transition: "transform 450ms",
    "&:hover": {
      transform: "scale(1.08)",
    },
    marginRight: theme.spacing(1),
  },
 
}));
