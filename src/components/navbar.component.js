  
import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 

export default class Navbar extends Component { 

render() { 
    return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <Link to="/" className="navbar-brand">Gift Organizer</Link> 
    <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto"> 
            <li className="navbar-item">
                <Link to="/" className="nav-link">Gifts</Link> 
            </li> 
            <li className="navbar-item"> 
                <Link to="/create" className="nav-link">Create Gift</Link> 
            </li> 
            <li className="navbar-item">
                <Link to="/friend" className="nav-link">Create Friend</Link> 
            </li> 
        </ul> 
    </div> 
    </nav>
    );
} }