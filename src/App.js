import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <Route path="/home" component={Home}></Route>
        </Router>
    );
  }
}

export default App;
