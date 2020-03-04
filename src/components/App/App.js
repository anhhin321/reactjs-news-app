import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import News from '../Content/News';
import Contact from '../Content/Contact';
import Service from '../Content/Service';
import RouterURL from '../RouterURL/RouterURL';



function App() {
  return (
    <Router>
 <div>

<Nav/>
  <div className="container">
    <RouterURL /> 
    </div>
    <footer className="text-center">
      <h5>Copy 2019 by Hin</h5>
    </footer>
    
</div>
</Router>
  );
}

export default App;
