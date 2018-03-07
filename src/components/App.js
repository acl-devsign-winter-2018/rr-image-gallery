import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './app.css';
import { connect } from '../image/Images';
import Images from '../image/Images';


export default class App extends Component {

  render() {
    
    return (

      <Router>
        
        <main id="main" role="main">
          <Switch>
            <Route exact path="/" component={Images}/>
            <Redirect to="/"/>
          </Switch>
        </main>
     
      </Router>
    
      
    );
  }
}



