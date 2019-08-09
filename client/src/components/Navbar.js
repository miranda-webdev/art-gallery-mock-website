import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link as RouterLink} from 'react-router-dom';

import {
  AppBar, Toolbar, Typography, Link, List, ListItem,
  withStyles, Grid, SwipeableDrawer,
} from '@material-ui/core';

import Home from '../pages/Home';
import About from '../pages/About';
import ContactUs from '../pages/Contact';


  const styleSheet = {
    '@global': {
      body: {
        backgroundColor: "white",
      },
      ul: {
        margin: 0,
        padding: 0,
      },
      li: {
        listStyle: 'none',
      },
    },
    toolbar: {
      flexWrap: 'wrap',
      borderBottom: '1px solid #ccc',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      padding: '1em 1.5em',
      width: '100%',
      height: '100%',
      '&:hover': {
          textDecoration: 'none'
      }
    },
    list : {
      width : 200,
    },
    padding : {
      paddingRight : 30,
      cursor : "pointer",
    },
    sideBarIcon : {
      padding : 0,
      marginRight: '1em',
      color : "white",
      cursor : "pointer",
    },
  };
  
  class NavBar extends Component{
    constructor(props){
      super(props);
      this.state = {drawerActivate:false, drawer:false};
      this.createDrawer = this.createDrawer.bind(this);
      this.destroyDrawer = this.destroyDrawer.bind(this);
    }
  
    componentWillMount(){
      if(window.innerWidth <= 1024){
        this.setState({drawerActivate:true});
      }
  
      window.addEventListener('resize',()=>{
        if(window.innerWidth <= 1024){
          this.setState({drawerActivate:true});
        }
        else{
          this.setState({drawerActivate:false})
        }
      });
    }
  
    //Small Screens
    createDrawer(){
      return (
        <div>
          <div style={{ paddingTop: 56 }}>
            <AppBar >
              <Toolbar>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <i className={`material-icons ${this.props.classes.sideBarIcon}`} onClick={()=>{this.setState({drawer:true})}} aria-label="Open Menu">menu</i>
                  <Typography variant="h6" color="inherit" noWrap className={this.props.classes.toolbarTitle}>Art Gallery</Typography>
                  <Typography color="inherit" variant="h6"></Typography>
                </Grid>
              </Toolbar>
            </AppBar>
          </div>
          <Router>
            <SwipeableDrawer
            open={this.state.drawer}
            onClose={()=>{this.setState({drawer:false})}}
            onOpen={()=>{this.setState({drawer:true})}}>
    
              <div
                tabIndex={0}
                role="button"
                onClick={()=>{this.setState({drawer:false})}}
                onKeyDown={()=>{this.setState({drawer:false})}}>
    
                <List className = {this.props.classes.list}>
                    <ListItem key = {1} button divider>
                        <Link component={RouterLink} variant="button" to="/" color="textPrimary" aria-label="Home" className={this.props.classes.link}>
                                Home
                        </Link>
                    </ListItem>
                    <ListItem key = {2} button divider>
                        <Link component={RouterLink} variant="button" to="/about-us" color="textPrimary" aria-label="About Us" className={this.props.classes.link}>
                        About Us
                        </Link>
                    </ListItem>
                    <ListItem key = {3} button divider>
                        <Link component={RouterLink} variant="button" to="/contact-us" color="textPrimary" aria-label="Contact Us" className={this.props.classes.link}>
                        Contact Us
                        </Link>
                    </ListItem>
                </List>
            </div>
          </SwipeableDrawer>
          <Route path="/" exact component={Home}/>
          <Route path="/about-us/" component={About} />
          <Route path="/contact-us" component={ContactUs} />
        </Router>
        </div>
      );
    }
  
    //Larger Screens
    destroyDrawer(){
      return (
        <Router>
        <AppBar position="sticky" color="inherit" elevation={0} className={this.props.classes.appBar}>
          <Toolbar color="default" className={this.props.classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={this.props.classes.toolbarTitle}>
              Art Gallery
            </Typography>
            <nav>
              <Link component={RouterLink} variant="button" to="/" color="textPrimary" aria-label="Home" className={this.props.classes.link}>
                Home
              </Link>
              <Link component={RouterLink} variant="button" to="/about-us" color="textPrimary" aria-label="About Us" className={this.props.classes.link}>
                About Us
              </Link>
              <Link component={RouterLink} variant="button" to="/contact-us" color="textPrimary" aria-label="Contact Us" className={this.props.classes.link}>
                Contact Us
              </Link>
            </nav>
          </Toolbar>
        </AppBar>
        <Route path="/" exact component={Home} />
        <Route path="/about-us/" component={About} />
        <Route path="/contact-us" component={ContactUs} />
      </Router>
      )
    }
  
    render(){
      return(
        <div>
          {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
        </div>
      );
    }
  }
  
  

  export default withStyles(styleSheet)(NavBar);
