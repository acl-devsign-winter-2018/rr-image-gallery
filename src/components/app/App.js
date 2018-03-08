import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Albums from '../album/Albums';
import Images from '../images/Images';
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
              <Route path="/albums/:id" component={Images}/>
              <Route path="/albums" component={Albums}/>
              <Redirect to="/albums"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}