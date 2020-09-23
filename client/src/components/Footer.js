import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

import NewsletterForm from './NewsletterForm';

const useStyles = makeStyles((theme) => ({
    main : {
        width: '100%',
        height: 'auto',
        backgroundColor: 'orange',
        padding: '15px',
        margin: 0
    }, 
    textStyles : {
        textAlign: 'center',
        margin: '1rem'
    }

}));

function Footer () {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Typography variant="h3" className={classes.textStyles}>Art Gallery</Typography>
            <Grid container direction="row" spacing={0}>
                <Grid item xs={12} md={4}> 
                    <List>
                        <ListItem>
                            <Typography variant="h4" className={classes.textStyles}>Address</Typography>
                        </ListItem>
                        <ListItem className={classes.textStyles}>Art Gallery</ListItem>
                        <ListItem className={classes.textStyles}>123 Street</ListItem>
                        <ListItem className={classes.textStyles}>City, 12345, Country</ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={4}> 
                    <List>
                        <ListItem>
                            <Typography variant="h4" className={classes.textStyles}>Phone Number</Typography>
                        </ListItem>
                        <ListItem className={classes.textStyles}>(123) 456 - 7890</ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={4}>
                    <List>
                        <ListItem>
                            <Typography variant="h4" className={classes.textStyles}>Hours</Typography>
                        </ListItem>
                        <ListItem className={classes.textStyles}>Monday - Saturday</ListItem>
                        <ListItem className={classes.textStyles}>9AM - 5PM</ListItem>
                    </List>
                </Grid>
            </Grid>
            <div>
                <NewsletterForm />
            </div>
        </div>
    )
}

export default Footer;