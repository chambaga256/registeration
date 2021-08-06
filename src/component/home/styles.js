import {makeStyles} from '@material-ui/core';
export default makeStyles((theme)=>({
    flexgrid:{
        display:'flex',
        margin:theme.spacing(1),
        justifyContent:'space-around',
        '& .MuiCard-root':{
            marginLeft:theme.spacing(4),
            width:'25%',
        },
        '& .MuiButton-label':{
            textTransform:'capitalize',
            color:'#92bc00'
        },
        '& .MuiCardHeader-title':{
            fontSize:'1.2rem',
            color:'#164A41',
            fontWeight:'bold'
        }
    },
    div:{
        marginLeft:theme.spacing(10),
        margin:theme.spacing(1),
        color:'#164A41'
    },
    mainTop:{
        backgroundColor:'#A3BCB6',
        objectFit:'contain',
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        color:'#fff',
        height:'70vh',
        '& .MuiTypography-subtitle1':{
            color:'#164A41'
        }
    },
    Toppaper:{
        marginTop:theme.spacing(30),
    },
    maindiv:{
        margin:theme.spacing(6)
    },
    Lowerflexgrid:{
        display:'flex',
        margin:theme.spacing(1),
        justifyContent:'space-around',
        '& .MuiCard-root':{
            marginLeft:theme.spacing(2),
            width:'35%',
            transition: 'transform 0.5s',
            '&:hover':{
                transform:'scale(1.08)',
            }
        },
        '& .MuiButton-label':{
            textTransform:'capitalize',
            color:'#92bc00'
        },
        '& .MuiCardHeader-title':{
            fontSize:'1.2rem',
            color:'#164A41',
            fontWeight:'bold'
        }
    },
    lowerpaper:{
        background:'#164A41',
        '& .MuiTypography-h6':{
            color:'#fff'
        }
    },
    media: {
        height:-3,
        padding:theme.spacing(8),
        width:-10,
      },
    gridFooter:{
        display:'flex',
        margin:theme.spacing(1)
    },
    pageMargin:{
        marginTop:theme.spacing(90),
    }

}))