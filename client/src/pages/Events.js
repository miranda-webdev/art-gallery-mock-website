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

// @TODO
/*
EVENTS is rerendering twice before and after data is loaded - bug
API cannot be found upon first load of site, needs to be refreshed to connect properly - bug
    fetch() has similar problem, server side issue?
also renders console.log from the home page once
*/

function Events () {
        //using styling
        const classes = useStyles();

        //state
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
            console.log('Inside useEffect, but before getData is called')
            getData()
            console.log('Inside useEffect, but after getData is called')

            return console.log('clean up')
        },[]);

        const getData = async () => {   
            console.log('getData called')
            setIsLoading(true);

            //fetch
            await axios.get('http://localhost:5000/api/events')
            .then((res) => {
                
                setData(res.data);
                console.log('get request successful')
            })
            .catch (err => {
                if (err.response) {
                    console.log(err.response)
                } else if (err.request) {
                    console.log(err.request)
                } else {
                    console.error(err);
                }
            });
            setIsLoading(false);
        }

        console.log(`Outside useEffect`) //shows in console empty twice and with data twice
        //possibly one for every DidMount and DidUpdate?

            return ( 
                <div className = "Events" >
                    <Typography variant="h2" className={classes.textStyles}>Events</Typography>
                    
                        {/* {data.events.map(event => {
                            <Grid item xs={12} lg={4}>
                                <Event key={event._id} event={event}/>
                            </Grid>
                            
                        })} */}
                        {isLoading ? (
                            <Typography variant="h3" className={classes.textStyles}>Loading...</Typography>
                        ) : (
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
                            </Grid>
                        )}
                </div>
                )
}

export default Events;