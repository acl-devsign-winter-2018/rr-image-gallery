import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './app.css';
// import { connect } from '../image/Images';
import Images from '../image/Images';
import Error from './Error';

export default class App extends Component {
  

  render() {
    const { error } = this.props;
    
    return (

      <Router>
        
        <main id="main" role="main">
          <div id="loader">
            { error && <Error error={error}/>}
          </div>
          <Switch>
            <Route exact path="/" component={Images}/>
            <Redirect to="/"/>
          </Switch>
        </main>
     
      </Router>
    
      
    );
  }
}



