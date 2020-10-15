import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    cardStyles: {
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '5px 5px 5px #ccc',
        width: 'auto',
        margin: '3em'
    }
}))

function Event (event) {
    const classes = useStyles();

    return (
        <Card className={classes.cardStyles}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    alt="event"
                    image={require('../images/photo-1513364776144-60967b0f800f.jpg')}
                    title="Event"/>
                <CardContent>
                    <Typography variant="h5">{event.eventName} - {event.eventDate}</Typography>
                    <Typography variant="body1">Art related things are happening at the Art Gallery</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Details</Button>
            </CardActions>
        </Card>
    );
}

export default Event;