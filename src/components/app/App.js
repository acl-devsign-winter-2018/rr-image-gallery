import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './app.css';
import Header from './Header';
import Albums from '../album/Albums';
import Album from '../album/Album';

class App extends Component {
  
  render() {

    return (
      <div>
        <Router>
          <div>
            <Header/>
            <main>
              {/* <Albums/> */}
              <Switch>
                <Route path="/" component={Albums}/>
                <Route path="/albums/:id" component={Album}/>
              </Switch>
            </main>
          </div>
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

