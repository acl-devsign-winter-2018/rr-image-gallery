import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Albums from '../album/Albums';
import Album from '../album/Album';
import Header from './Header';
import Loading from './Loading';
import './app.css';
import '../../styles/variables.css';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Loading/>
            <Switch>
              <Route path="/albums/:id" component={Album}/>
              <Route path="/albums" component={Albums}/>
              <Redirect to="/albums"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}