import React from 'react';
import './App.css';


function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
      <Route path='/' exact component={Home} />
      </Switch>
    </Router>
    
  );}
export default App;
