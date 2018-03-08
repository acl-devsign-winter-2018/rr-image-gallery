import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import Albums from '../album/Albums';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  
  render() {

    return (
      <div>
        <header>
          <h1>Image Gallery</h1>
        </header>
        <main>
          <Router>
            <Albums/>
          </Router>
        </main>
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

