import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    main : {
        backgroundColor: '#f5f5f5',
    },
    textStyles : {
        textAlign: 'center',
        margin: '1rem'
    }
}));

function About() {
    const classes = useStyles();

    return ( 
    <div className = {classes.main} >
        <Grid container direction="row" className={classes.overlay}>
            <Grid item xs={12}><Typography variant="h3" className={classes.textStyles}>Our Mission</Typography></Grid>
            <Grid item xs={12}>
                <Typography variant="body1" className={classes.textStyles}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolores ut delectus quas pariatur vitae magni, accusantium molestias aliquam doloremque quo sit quia? Fugit omnis a nihil sit eius eos doloremque debitis fuga? Eaque voluptate, magnam, exercitationem eligendi est iure nisi recusandae beatae consequuntur quidem deleniti similique adipisci culpa sint?</Typography>

                <Typography variant="body1" className={classes.textStyles}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolores ut delectus quas pariatur vitae magni, accusantium molestias aliquam doloremque quo sit quia? Fugit omnis a nihil sit eius eos doloremque debitis fuga? Eaque voluptate, magnam, exercitationem eligendi est iure nisi recusandae beatae consequuntur quidem deleniti similique adipisci culpa sint?</Typography>

                <Typography variant="body1" className={classes.textStyles}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolores ut delectus quas pariatur vitae magni, accusantium molestias aliquam doloremque quo sit quia? Fugit omnis a nihil sit eius eos doloremque debitis fuga? Eaque voluptate, magnam, exercitationem eligendi est iure nisi recusandae beatae consequuntur quidem deleniti similique adipisci culpa sint?</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" className={classes.textStyles}>Join Our Newsletter</Typography>
                <form className={classes.textStyles}>
                    <TextField 
                        className={classes.textStyles}
                        required id="standard-required" label="First Name"/>
                     <TextField 
                     className={classes.textStyles}
                     required id="standard-required" label="Email"/>
                     <Button variant="contained" color="primary" className={classes.textStyles}>JOIN!</Button>
                </form>
            </Grid>
            <Grid item xs={12} md={4}> 
                <List>
                    <ListItem><Typography variant="h4" className={classes.textStyles}>Address</Typography></ListItem>
                    <ListItem className={classes.textStyles}>Art Gallery</ListItem>
                    <ListItem className={classes.textStyles}>123 Street</ListItem>
                    <ListItem className={classes.textStyles}>City, 12345, Country</ListItem>
                </List>
            </Grid>
            <Grid item xs={12} md={4}> 
                <List>
                    <ListItem><Typography variant="h4" className={classes.textStyles}>Phone Number</Typography></ListItem>
                    <ListItem className={classes.textStyles}>(123) 456 - 7890</ListItem>
                </List>
            </Grid>
            <Grid item xs={12} md={4}>
                <List>
                    <ListItem><Typography variant="h4" className={classes.textStyles}>Hours</Typography></ListItem>
                    <ListItem className={classes.textStyles}>Monday - Saturday</ListItem>
                    <ListItem className={classes.textStyles}>9AM - 5PM</ListItem>
                </List>
            </Grid>
        </Grid>
    </div>
    )
}

export default About;