import React from 'react';
import { Link as RouterLink} from 'react-router-dom';

import '../images/steve-johnson-1150048-unsplash.jpg';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Event from '../components/Event';


const useStyles = makeStyles((theme) => ({
    root: {
      boxSizing: 'inherit',
      flexGrow: 1,
      width: '100%',
      height: 'auto',
      margin: 0,
      padding: 0,
    },
    containerImg: {
        position: 'relative',
        textAlign: 'center',
    },
    styleImg: {
        width: '100%',
        height: 'auto',
        opacity : .85
    },
    imgTextStyle: {
        fontWeight: 'bold',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 1
    },
    textStyles : {
        textAlign: 'center',
        margin: '1rem'
    }
  }));

function Home(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Link component={RouterLink} variant="button" to="/events/" color="textPrimary" aria-label="Main Event">
                <div className={classes.containerImg}>
                    <img className={classes.styleImg} alt="" src={require('../images/steve-johnson-1150048-unsplash.jpg')}/>
                    <Typography variant="h2" className={classes.imgTextStyle}>Limited Time Gallery</Typography>
                </div>
            </Link>
            
            <Grid className={classes.events} container direction="row" justify="space-between" spacing={0}>
                <Grid item zeroMinWidth xs={12} lg={12}>
                    <Typography variant="h3" className={classes.textStyles}>Upcoming Events</Typography>
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={3}>
                    <Event />
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={3}>
                    <Event />
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={3}>
                    <Event />
                </Grid>
                <Grid item zeroMinWidth xs={12} lg={3}>
                    <Event />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;