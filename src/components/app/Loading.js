import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadingSelector } from './reducers';

class Loading extends Component {

  render() {
    const { loading } = this.props;
    if(!loading) return null;

    return (
      <div className="loading">
        <p>LOADING</p>
      </div>
    );
  }
}

export default connect(
  state => ({ loading: loadingSelector(state) }),
  null
)(Loading);