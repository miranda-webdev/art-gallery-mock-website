import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import NewsletterForm from '../components/NewsletterForm';


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
        <Grid container direction="row">
            <Grid item xs={12}><Typography variant="h3" className={classes.textStyles}>Our Mission</Typography></Grid>
            <Grid item xs={12}>
                <Typography variant="body1" className={classes.textStyles}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolores ut delectus quas pariatur vitae magni, accusantium molestias aliquam doloremque quo sit quia? Fugit omnis a nihil sit eius eos doloremque debitis fuga? Eaque voluptate, magnam, exercitationem eligendi est iure nisi recusandae beatae consequuntur quidem deleniti similique adipisci culpa sint?</Typography>

                <Typography variant="body1" className={classes.textStyles}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolores ut delectus quas pariatur vitae magni, accusantium molestias aliquam doloremque quo sit quia? Fugit omnis a nihil sit eius eos doloremque debitis fuga? Eaque voluptate, magnam, exercitationem eligendi est iure nisi recusandae beatae consequuntur quidem deleniti similique adipisci culpa sint?</Typography>

                <Typography variant="body1" className={classes.textStyles}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolores ut delectus quas pariatur vitae magni, accusantium molestias aliquam doloremque quo sit quia? Fugit omnis a nihil sit eius eos doloremque debitis fuga? Eaque voluptate, magnam, exercitationem eligendi est iure nisi recusandae beatae consequuntur quidem deleniti similique adipisci culpa sint?</Typography>
            </Grid>
            <Grid item xs={12}>
                <NewsletterForm />
            </Grid>
        </Grid>
    </div>
    )
}

export default About;