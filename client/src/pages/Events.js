import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Event from '../components/Event';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    textStyles : {
        textAlign: 'center',
        margin: '1rem'
    }
}));

function Events () {
        // const [data, setData] = useState({ events: [] });

        async function getData() {
            try {
                const eventsDB = await axios.get('http://localhost:5000/api/events');
                console.log(eventsDB.data);
            } catch (e) {
                console.error(e)
            }

        }

        try{
            useEffect(() => {
                getData()
            }, []);
        }catch(err){
            console.log(err)
        }
        

        const classes = useStyles();

        return ( 
        <div className = "Events" >
            <Typography variant="h2" className={classes.textStyles}>Events</Typography>
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