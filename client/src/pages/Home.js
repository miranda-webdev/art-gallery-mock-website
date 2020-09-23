import React from 'react';
import { Link as RouterLink} from 'react-router-dom';

import '../images/steve-johnson-1150048-unsplash.jpg';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      boxSizing: 'inherit',
      flexGrow: 1,
      width: '100%',
      height: 'auto',
      margin: '0',
      padding: '0',
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
    textStyle: {
        fontWeight: 'bold',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: '1'
    },
    events : {
        margin: '0'  
    },
    cardStyles: {
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '5px 5px 5px #ccc',
        width: 'auto',
        margin: '3em'
    }
  }));

function Home(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Link component={RouterLink} variant="button" to="/events/" color="textPrimary" aria-label="Main Event">
                <div className={classes.containerImg}>
                    <img className={classes.styleImg} alt="" src={require('../images/steve-johnson-1150048-unsplash.jpg')}/>
                    <Typography variant="h2" className={classes.textStyle}>Limited Time Gallery</Typography>
                </div>
            </Link>
            
            <Grid className={classes.events} container direction="row" justify="space-between" spacing={0}>
                <Grid item  xs={12} lg={12}><Typography variant="h3">Upcoming Events</Typography></Grid>
                <Grid item xs={12} lg={3}>
                    <Card className={classes.cardStyles}>
                        <CardActionArea>
                            <CardMedia 
                                component="img"
                                alt="event"
                                image={require('../images/photo-1513364776144-60967b0f800f.jpg')}
                                title="Event"/>
                            <CardContent>
                                <Typography variant="h5">Event - date</Typography>
                                <Typography variant="body1">Art related things are happening at the Art Gallery</Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">Share</Button>
                            <Button size="small" color="primary">Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Card className={classes.cardStyles}>
                        <CardActionArea>
                            <CardMedia 
                                component="img"
                                alt="event"
                                image={require('../images/photo-1513364776144-60967b0f800f.jpg')}
                                title="Event"/>
                            <CardContent>
                                <Typography variant="h5">Event - date</Typography>
                                <Typography variant="body1">Art related things are happening at the Art Gallery</Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">Share</Button>
                            <Button size="small" color="primary">Details</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} lg={3}>
                    <Card className={classes.cardStyles}>
                        <CardActionArea>
                            <CardMedia 
                                component="img"
                                alt="event"
                                image={require('../images/photo-1513364776144-60967b0f800f.jpg')}
                                title="Event"/>
                            <CardContent>
                                <Typography variant="h5">Event - date</Typography>
                                <Typography variant="body1">Art related things are happening at the Art Gallery</Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">Share</Button>
                            <Button size="small" color="primary">Details</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} lg={3}>
                    
                    <Card className={classes.cardStyles} styles={{minHeight: '200px'}}>
                        <Link component={RouterLink} variant="button" to="/events/" color="textPrimary" aria-label="More Events">
                            <CardContent>
                                <Typography variant="h5" noWrap>More Events...</Typography>
                            </CardContent>
                        </Link>
                    </Card>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;