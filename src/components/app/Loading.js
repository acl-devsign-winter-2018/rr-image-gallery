import React, { Component } from 'react';
import { connect } from 'react-redux';



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
  state => ({ loading: state.loading }),
  null
)(Loading);