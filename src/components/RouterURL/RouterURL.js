import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from '../Content/Home';
import Service from '../Content/Service';
import Contact from '../Content/Contact';
import News from '../Content/News';
class RouterURL extends Component {
    render() {
        return (
          
            <div>
                    <Route exact path="/" component={News} />                   
                    <Route exact path="/service" component={Service} />                   
                    <Route exact path="/contact" component={Contact} />                   
                    <Route exact path="/xemct/:slug.:id.html" component={Home} />                   
                
                {/* <Route exact path="/service">
                  <Service />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route path="/xemct/:slug.:id">
                  <Home />
                </Route> */}
            </div>
            
          
        );
    }
}

export default RouterURL;