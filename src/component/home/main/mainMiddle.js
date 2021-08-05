import React from "react";
import useStyles from "../styles";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { Customized } from "../../customized/customized";

export default function MainMiddle() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
          <div className={classes.div}>
              <Typography variant='h6'>Learn with StratCom</Typography>
              <Typography variant='subtitle1' component='p' color='textSecondary' gutterBottom>Secure better skills and improve your profile</Typography>
          </div>
        <Grid item row className={classes.flexgrid}>
          <Card elevation={0} className={classes.card}>
          <CardHeader 
            title="Graphics Design "
            subheader='Adobe...'
            />
            <CardContent>
              <Typography variant="substitle2" component="p">
                The best graphics design techniques required to a Graphic course
              </Typography>
            </CardContent>
            <CardActions>
              <Customized.Button text="learn more" variant="text" />
            </CardActions>
          </Card>
          <Card elevation={0}>
          <CardHeader 
            title="Web Development"
            subheader='ReactJS...'
            />
            <CardContent>
              <Typography variant="substitle2" component="p">
                Learn more most interesting web development languages
              </Typography>
            </CardContent>
            <CardActions>
              <Customized.Button text="learn more" variant="text" />
            </CardActions>
          </Card>
          <Card elevation={0}>
            <CardHeader 
            title="App Development"
            subheader='ReactNative...'
            />
            <CardContent>
              <Typography variant="substitle2" component="p">
                Learn more most interesting app development languages
              </Typography>
            </CardContent>
            <CardActions>
              <Customized.Button text="learn more" variant="text" />
            </CardActions>
          </Card>
        </Grid>
        <Grid item row className={classes.flexgrid}>
          <Card elevation={0}>
          <CardHeader 
            title="Networking"
            />
            <CardContent>
              <Typography variant="substitle2" component="p">
                Networking with super educated internship supervisors from Cisco
              </Typography>
            </CardContent>
            <CardActions>
              <Customized.Button text="learn more" variant="text" />
            </CardActions>
          </Card>
          <Card elevation={0}>
          <CardHeader 
            title="Computer Repairs"
            />
            <CardContent>
              <Typography variant="substitle2" component="p">
                A lot new uprising computer repair skills are need in the fields
              </Typography>
              <Typography variant="caption" component="p">
                Learn with us
              </Typography>
            </CardContent>
            <CardActions>
              <Customized.Button text="learn more" variant="text" />
            </CardActions>
          </Card>
          <Card elevation={0}>
          <CardHeader 
            title="Cyber Security"
            />
            <CardContent>
              <Typography variant="substitle2" component="p">
                Need a skill in CyberSecurity, stratcom gives the need trending techniques
              </Typography>
              <Typography variant="caption" component="p">
                Learn with us
              </Typography>
            </CardContent>
            <CardActions>
              <Customized.Button text="learn more" variant="text" />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
