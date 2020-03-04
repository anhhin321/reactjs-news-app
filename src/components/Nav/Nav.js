import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, NavLink} from "react-router-dom";

class Nav extends Component {
  
    render() {
        return (
            <div>
  <nav>
    <ul className="nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Trang chu</NavLink>
      </li>
      <li className="nav-item">
       <NavLink className="nav-link"  to="/service">service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">contact</NavLink>
      </li>
     
    </ul>
  </nav>
            </div>
        );
    }
}

export default Nav;