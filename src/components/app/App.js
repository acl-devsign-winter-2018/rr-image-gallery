import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Images from '../images/Images';
import Header from '../Header';
import './main.css';

export default class App extends Component{
  render(){
    return (
      <div>
        <Header/>
        <Router>
          <main id="main">
            <Switch>
              <Route exact path="/" component={Images} />
              <Redirect to="/"/>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}