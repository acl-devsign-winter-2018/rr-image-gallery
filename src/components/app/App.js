import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
// import { connect } from 'react-redux';
import Header from './header/Header';
import Footer from './footer/Footer';
import Images from './image/Images';
import Loading from './Loading';


export default class App extends Component {

  render() {
    return (
      <div className="app">

        <Router>
          <div>
            <Header/>
            <main role="main" id="main">
              <Loading/>
              <Switch>
                <Route exact path="/" component={Images}/>
                {/* <Route path="/about" component={About}/> */}
                {/* <Route path="/movies/:id" render={({ match }) => <MovieDetail imdbID={match.params.id}/>}/> */}
                <Redirect to="/"/>
              </Switch>

            </main>
          </div>
        </Router>

        <Footer/>
      </div>
    );
  }
}

// export default connect(
//   state => ({ 
//     loading: state.loading,
//     error: state.error 
//   }),
//   null
// )(App);