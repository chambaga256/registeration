import {makeStyles} from '@material-ui/core';

export default makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            width:'85%',
            margin:theme.spacing(1),
        }
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
    flex:{
        display:'flex',
        justifyContent:'space-between',
        color:'#A3BCB6',
        marginLeft:theme.spacing(1),
        '& .MuiSvgIcon-root':{
            marginLeft:'10px',
            opacity:'.6'
        }
    },
    dialog:{
        '& .MuiDialog-paper':{
        width:'26%',
        padding:theme.spacing(3),
        margin:'30px auto',
        },
        '& .MuiDialogContent-root':{
            marginRight:theme.spacing(-2),
            marginLeft:theme.spacing(-2.5)
        },
    },
    forgotBut:{
        marginLeft:'70%',
        '& .MuiButtonBase-root':{
            marginLeft:theme.spacing(1),
            '& .MuiSvgIcon-root':{
                marginLeft:'10px',
                opacity:'.6'
            }
        }
    }
}))