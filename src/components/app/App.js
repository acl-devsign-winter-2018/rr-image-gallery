import React, { Component } from 'react';
import Album from '../album/Album';
import { connect } from 'react-redux';
import './app.css';
import '../../styles/variables.css';

class App extends Component {

  render() {
    const { loading, error } = this.props;
    return (
      <div id="container">
        <div className="main-body">
          <header id="main-header">
            <h1>Image Gallery</h1>
          </header>
          <main id="main-content">
            <div>
              <p>{loading ? 'LOADING' : '' }</p>
              { error && 
                <pre style={{ color: 'red', fontSize: '1.5em' }}>
                  {error.message
                    ? error.message
                    : error.error ? error.error : error }
                </pre>
              }
              <Album/>
            </div>
          </main>
          <footer id="main-footer"></footer>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.loading,
    error: state.error
  }),
  null
)(App);