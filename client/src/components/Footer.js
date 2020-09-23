import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    main : {
        width: '100vw',
        height: 'auto',
        backgroundColor: 'orange',
        padding: '15px',
    } 

}));

function Footer () {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Typography variant="h3">INFO</Typography>
            <Grid container direction="row" justify="space-between" alignItems="center" spacing={0}>
                <Grid item xs={12} lg={4}>Address: Art Galley 123 Street, City, 12345, Country</Grid>
                <Grid item xs={12} lg={4}>Phone Number: (123) 456 - 7890</Grid>
                <Grid item xs={12} lg={4}>Hours: Monday - Saturday 9AM - 5PM</Grid>
            </Grid>
            <div>
                <Typography variant="h5">Sign up for our newsletter</Typography>
                <label>Email: </label><input type="text"/>
            </div>
        </div>
    )
}

export default Footer;