import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AlbumDetail from '../album/AlbumDetail';
import { SyncLoader } from 'react-spinners';
import Error from './Error';
import Albums from '../album/Albums';


class App extends Component {


  render() {
    const { loading, error } = this.props;
    
    return (
      <Router>
        <div id="container">
          <header id="header">
            <div id="loader">
              <SyncLoader loading={loading}/>
            </div>
            { error && <Error error={error}/> }
          </header>
          <main id="main" role="main">
            <Switch>
              <Route exact path="/" component={Albums}/>
              <Route path="/albums/:id" component={AlbumDetail}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          <footer id="footer" role="contentinfo">
            <ul>
              <li>
                <a href="https://github.com/Theartbug" target="_blank" rel="noopener noreferrer">
                  <span className="fa fa-github fa-3x"></span>
                  <span className="clip">Github</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/graceprovost/" target="_blank" rel="noopener noreferrer">
                  <span className="fa fa-linkedin fa-3x"></span>
                  <span className="clip">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="mailto:grace.g.provost@gmail.com">
                  <span className="fa fa-envelope-square fa-3x"></span>
                  <span className="clip">Email</span>
                </a>
              </li>
            </ul>
            <small>&copy; 2018 Grace Provost | Student Work</small>
          </footer>
        </div>
      </Router>
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