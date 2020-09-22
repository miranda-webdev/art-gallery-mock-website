import React from 'react';
import { Link as RouterLink} from 'react-router-dom';

import '../images/steve-johnson-1150048-unsplash.jpg';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    style: {
        width: 'auto',
        height: '100%',
        opacity : .85
    },
    textStyle: {
        fontWeight: 'bold',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    container: {
        position: 'relative',
        textAlign: 'center',
    },
    event : {
        border: '1px solid black',
        textAlign: 'center',
        margin: '1vw'
    }
  }));

function Home(){
    const classes = useStyles();
    return(
        <Grid container direction="column" justify="space-between" alignItems="center">
            <Link component={RouterLink} variant="button" to="/events/" color="textPrimary" aria-label="Main Event">
                <div className={classes.container}>
                    <img className={classes.style} alt="" src={require('../images/steve-johnson-1150048-unsplash.jpg')}/>
                    <Typography variant="h2" className={classes.textStyle}>Limited Time Gallery</Typography>
                </div>
            </Link>
            
                <Grid container direction="row" justify="space-between" alignItems="center" spacing={5}>
                    <Grid item xs={12}><Typography variant="h3">Upcoming Events</Typography></Grid>
                    <Grid item xs className={classes.event}>Upcoming Event</Grid>
                    <Grid item xs className={classes.event}>Upcoming Event</Grid>

                    <Grid item xs className={classes.event}><Link component={RouterLink} variant="button" to="/events/" color="textPrimary" aria-label="More Events">View More Events</Link>
                    </Grid>
                </Grid>
        </Grid>
    )
}

export default Home;