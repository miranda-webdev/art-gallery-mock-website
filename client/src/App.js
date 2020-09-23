import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  App : {
    boxSizing: 'border-box',
    // width: '98%'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
