import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import Event from '../components/Event';

// const useStyles = makeStyles((theme) => ({

// }));

function Events() {
    // const classes = useStyles();

    return ( 
    <div className = "Events" >
        <Typography variant="h2">Events</Typography>
        <Grid container direction="row" justify="space-between" >
            <Grid item xs={12} lg={4}>
               <Event />
            </Grid>
            <Grid item xs={12} lg={4}>
                <Event />
            </Grid>
            <Grid item xs={12} lg={4}>
                <Event />
            </Grid>
            <Grid item xs={12} lg={4}>
                <Event />
            </Grid>
            <Grid item xs={12} lg={4}>
                <Event />
            </Grid>
            <Grid item xs={12} lg={4}>
                <Event />
            </Grid>
        </Grid>
    </div>
    )
}

export default Events;