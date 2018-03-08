import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Albums from '../album/Albums';
import Album from '../album/Album';

class App extends Component {
  
  render() {

    return (
      <div>
        <header>
          <h1>Image Galleries</h1>
        </header>
        <Router>
          <main>
            <Albums/>
            <Switch>
              <Route path="/albums/:id" component={Album}/>
            </Switch>
          </main>
        </Router>
      </div>  
    );
  }
}

export default connect(
  state => ({
    loading: state.loading
  }),
  null
)(App);

