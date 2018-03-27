import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Error from './Error';
import Albums from '../image/Albums';
import Header from '../Header';
import Images from '../image/Images'
import '../styles/main.css';
import '../styles/reset.css';


class App extends PureComponent {

  render() {
    const { loading, error } = this.props;

    return (
      <Router>
        <div>
          <Header id="header">
            { error && <Error error={error}/> }
            <div>
              {loading}
            </div>
          </Header>
          <main>
            <Switch>
              <Route exact path="/" component={Albums}/>
              <Route path="/albums/:id" component={Images}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          <footer id="footer"><small>Jenny's Happy Bunny</small></footer>
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