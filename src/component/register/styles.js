import {makeStyles} from '@material-ui/core';

export default makeStyles(theme=>({
    paper:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    },
    table:{
        marginTop: theme.spacing(3),
          '& thead th':{
            fontWeight:'600',
            color:theme.palette.primary.main
    ,
    backgroundColor:theme.palette.primary.light, 
          },
          '& tbody td':{
              fontWeight:'300',
          },
          '& tbody tr:hover':{
              backgroundColor:'#fffbf2',
              cursor:'pointer',
          }
    },
    button:{
        marginLeft:'91%',
        '& .MuiButton-root':{
            textTransform:'capitalize'
    },
        }
}))