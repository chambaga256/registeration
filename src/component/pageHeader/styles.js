import {makeStyles} from '@material-ui/core';

export default makeStyles(theme=>({
    root:{
        backgroundColor:'#fdfdff',
        marginTop:theme.spacing(9),
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2),
        '& .MuiCard-root':{
            display: "inline-block",
            position: "relative",
            transition: "transform 450ms",
            "&:hover": {
              transform: "scale(1.08)",
            },

    }
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#9bc400',
    },
    pageIconLeft:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#9bc400',
        margin:theme.spacing(2),
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-caption':{
            opacity:'.6'
        }
    },
    searchInput:{
        '& .MuiInputBase-root':{
            marginLeft:theme.spacing(4),
            color:'#9bc400'
        },
        '& .MuiSvgIcon-root':{
            marginRight:theme.spacing(1),
            color:"#f4f5fd",
        },
        '& .MuiInputBase-input':{
            borderRadius:'2px',
            "&:hover":{
                background:'#f2f2f2',
                borderRadius:'10px',
                opacity:'.4',
            },
            width:'45%',
        },
        
    },
    grid:{
        display:'flex',
        flexDirection:'row'
    }
}))