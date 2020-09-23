import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
                <Grid item xs={12} lg={4}>
                    <List>
                        <ListItem><Typography variant="h4">Address</Typography></ListItem>
                        <ListItem>Art Gallery</ListItem>
                        <ListItem>123 Street</ListItem>
                        <ListItem>City, 12345, Country</ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <List>
                        <ListItem><Typography variant="h4">Phone Number</Typography></ListItem>
                        <ListItem>(123) 456 - 7890</ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <List>
                        <ListItem><Typography variant="h4">Hours</Typography></ListItem>
                        <ListItem>Monday - Saturday</ListItem>
                        <ListItem>9AM - 5PM</ListItem>
                    </List>
                </Grid>
            </Grid>
            <div>
                <Typography variant="h5">Sign up for our newsletter</Typography>
                <form >
                    <TextField 
                        
                        required id="standard-required" label="First Name"/>
                     <TextField 
                     
                     required id="standard-required" label="Email"/>
                     <Button variant="contained" color="primary" >JOIN!</Button>
                </form>
            </div>
        </div>
    )
}

export default Footer;