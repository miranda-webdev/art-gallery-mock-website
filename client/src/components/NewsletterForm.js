import React from 'react';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    textStyles : {
        textAlign: 'center',
        margin: '1rem'
    }
}));

function NewsletterForm(){
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
      };

      const handleChangeEmail = (event) => {
        setEmail(event.target.value);
      };

    const classes = useStyles();
    return(

        <div>
            <Typography variant="h5" className={classes.textStyles}>Join Our Newsletter</Typography>
            <form className={classes.textStyles}>
                <FormControl className={classes.textStyles}>
                    <InputLabel htmlFor="component-simple">First Name</InputLabel>
                    <Input id="component-simple" value={name} onChange={handleChangeName}/>
                </FormControl>
                <FormControl className={classes.textStyles}>
                    <InputLabel htmlFor="component-simple">Your Email</InputLabel>
                    <Input id="component-simple" value={email} onChange={handleChangeEmail}/>
                </FormControl>
                <Button variant="contained" color="primary" className={classes.textStyles}>JOIN!</Button>
            </form>
        </div>
     )
}

export default NewsletterForm;