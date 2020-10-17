import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact to="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
