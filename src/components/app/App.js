import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './app.css';
// import { connect } from '../image/Images';
import Images from '../image/Images';
import Error from './Error';
import { connect } from 'react-redux';


class App extends Component {
  

  render() {
    const { error, loading } = this.props;
    
    return (

      <Router>
        
        <main id="main" role="main">
          <div id="loader">
            { error && <Error error={error}/>}
          </div>
          <div>Loading status is: {loading ? 'loading!!!!' : 'not loading!' }</div>
          <Switch>
            <Route exact path="/" component={Images}/>
            <Redirect to="/"/>
          </Switch>
        </main>
     
      </Router>
    
      
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    error: state.error
  };
}

export default connect(
  mapStateToProps, null
)(App);