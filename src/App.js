import React from 'react';
import './App.css';
import Navbar from './component/NavBar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route path='/home'>Home</Route> 
     </Switch>
    </Router>
    
  );}
export default App;
