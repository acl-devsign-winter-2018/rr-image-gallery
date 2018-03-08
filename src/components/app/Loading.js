import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';

class Loading extends Component {
  
  render() {
    const { loading } = this.props;
    if(!loading) return false;
    
    return (
      <div id='loaderIcon'>
        <PulseLoader
          color={'#123abc'} 
          loading={this.props.loading} 
        />
      </div>
    );
  }
}

export default connect(
  state => ({ loading: state.loading }),
  null
)(Loading);