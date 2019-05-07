import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from './LandingPage';
import About from './About';
import Art from './Art';
import Contact from './Contact';


class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            menu_class: 'nav-menu-toggle'
        }
    }

    toggleMenuHandler = () => {
        if(this.state.menu_class === 'nav-menu-toggle') {
            this.setState({
                menu_class: 'nav-menu-toggle responsive'
            });

        } else {
            this.setState({
                menu_class: 'nav-menu-toggle'
            });
        }
    }
    
    render(){
        return (
            <Router>
                <div className="Navbar">
                    <nav className="main-nav"> 
                        <button className="icon" onClick={this.toggleMenuHandler}>
                            <i className="fas fa-bars fa-3x"></i>
                        </button>
                        <ul className={this.state.menu_class}>
                            <li>
                                <Link to="/" className="nav-link" onClick={this.activeLink}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about/" className="nav-link">About</Link>
                            </li>
                            <li>
                                <Link to="/art/" className="nav-link">Art</Link>
                            </li>
                            <li>
                                <Link to="/contact/" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </nav>
    
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/about/" component={About} />
                    <Route path="/art/" component={Art} />
                    <Route path="/contact/" component={Contact}/>
                </div>
            </Router>
        )
    }
}

export default Navbar;
