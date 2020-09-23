import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  App : {
    height: '100vh',
    width: '100vw'
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
