import React from "react";
import { Dialog, DialogContent} from "@material-ui/core";
import { Customized } from "./customized";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";
export default function ForgotPopup({ Popup, setPopup, children}) {
  const classes = useStyles();
  return (
    <Dialog open={Popup}
    className={classes.dialog}>
        <div className={classes.forgotBut}>
          <Customized.Button
            styles={{justify:'center', color:'#A3BCB6'}}
            variant='text'
            startIcon={<CloseIcon fontSize="small" />}
            onClick={() => setPopup(false)}
          />
        </div>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
