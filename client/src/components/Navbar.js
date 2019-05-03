import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
import Art from './Art';
import Contact from './Contact';

export function Navbar () {
    return (
        <Router>
            <div>
                <nav className="main-nav">
                    <ul>
                        <li>
                        <Link to="/" className="nav-link">Home</Link>
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

                <Route exact path="/" />
                <Route path="/about/" component={About} />
                <Route path="/art/" component={Art} />
                <Router path="/contact/" component={Contact}/>
            </div>
        </Router>
    )
}

export default Navbar;
