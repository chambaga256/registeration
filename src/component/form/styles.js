import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
  next:{
    marginLeft:theme.spacing(3),
    '& .MuiFormControl-root':{
        width:'104%',
    },
  },
  button: {
    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
      margin: theme.spacing(1),
    },
    "& .MuiButton-text": {
      color: "#164A41",
      background: "#9bc400",
      "&:hover": {
        background: "#164A41",
        color: "#fff",
      },
    },
  },
  paper: {
    width: "28%",
    padding: theme.spacing(3),
    margin: "30px auto",
    "& .MuiButtonBase-root": {
      marginBottom: theme.spacing(1),
      textTransform: "capitalize",
      marginTop: theme.spacing(1),
    },
    "& .MuiOutlinedInput-root": {
      width: "103%",
      paddingRight: theme.spacing(1),
    },
  },
 
  Typography1: {
    marginLeft: "62%",
    display: "inline-block",
  },
  grid: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(4.1),
    paddingLeft: theme.spacing(-1),
    paddingRight: theme.spacing(-1),
    marginLeft: theme.spacing(-3),
    "& .MuiButtonBase-root": {
      marginLeft: theme.spacing(3.3),
    },
  },
  google:{
    background:'#fff',
    '&:hover':{
      background:'#fff',
      '& .MuiButton-label':{
      color:'#164A41'
    }
    },
  },
  but:{
    marginLeft:theme.spacing(3),
    background:"#9bc400",
    '&:hover':{
      background:"#9bc400",
    }
  },
  marginRegister:{
    marginTop:theme.spacing(2),
    marginBottom:theme.spacing(2),
  },
  gridRegister:{
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(4.2),
    marginLeft: theme.spacing(-3),
    "& .MuiButtonBase-root": {
      marginLeft: theme.spacing(3.3),
    },
  },
  MuiTypo:{
    '& .MuiTypography-root':{
      margin:'20px auto',
      paddingLeft:'75px'
    }
  }
  
}));
