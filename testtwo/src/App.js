import React from 'react';

import './App.css';
import Header from './components/Header';
import SearchList from './components/SearchList';
import SingleMovie from './components/SingleMovie'
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";

import About from './components/About';



function App() {



  return (
    <div className="App">
      <Router>
      <Header/>
     
        <Switch>
       
        <Route path="/" exact>
            <SearchList/>
           </Route>
         
           <Route path="/About" exact>
            <About/>
           </Route>
           <Route path="/:movieid" exact>
            <SingleMovie/>
           </Route>
        </Switch>

      </Router>
     
    
    </div>
  );
}

export default App;
