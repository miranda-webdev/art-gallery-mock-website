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
            menu_class: 'nav-menu-toggle',
            link_color_class: 'nav-link',
            colors: ['red', 'blue', 'yellow']
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

    addColorHandler = () => {
        let color = Math.floor(Math.random() * 3);
     
        this.setState({
            link_color_class: this.state.colors[color] + " nav-link"
        })
    
        
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
                                <Link to="/" className={this.state.link_color_class} onMouseOver={this.addColorHandler}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about/" className={this.state.link_color_class} onMouseOver={this.addColorHandler}>About</Link>
                            </li>
                            <li>
                                <Link to="/art/" className={this.state.link_color_class} onMouseOver={this.addColorHandler}>Art</Link>
                            </li>
                            <li>
                                <Link to="/contact/" className={this.state.link_color_class} onMouseOver={this.addColorHandler}>Contact</Link>
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
