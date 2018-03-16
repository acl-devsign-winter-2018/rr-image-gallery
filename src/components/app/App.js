import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './app.css';
import Header from './Header';
import Albums from '../album/Albums';
import Album from '../album/Album';

class App extends Component {
  
  // createElement = (Album) => 
  // <Album key={this.props.match.params.id}/>

  render() {
    const { createElement } = this.props;

    return (
      <div>
        <Router>
          <div>
            <Header/>
            <main>
              <Albums/>
              <Switch>
                <Route exact path="/"/>
                {/* <Route path="/albums/:id" component={({ match }) => {
                  return <Album id={match.params.id}/>; */}
                {/* }}/> */}
                <Route path="/albums/:id" component={Album}/>;
                <Redirect to="/"/>
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

