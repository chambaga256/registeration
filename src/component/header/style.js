import {makeStyles} from '@material-ui/core';

export default makeStyles(theme=>({
   
    button:{
       '& .MuiButtonBase-root':{
           textTransform:'capitalize',
           margin:theme.spacing(1),
           
       },
       '& .MuiButton-outlined':{
        color:'#164A41',
        background:'none',
        paddingRight:'1rem',
        paddingLeft:'1rem',
        borderRadius:'12px',
        '&:hover':{
            background:'#164A41',
            color:'#fff',
        }
    }
    },
    grid:{
        display:'flex',
        marginLeft:theme.spacing(2),
    }
    
}))