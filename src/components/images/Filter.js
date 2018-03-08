import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applyFilter } from './actions';

class Filter extends Component{
  render(){
    const { filter } = this.props;
    
    return (
      <div>
        <input value={filter} onChange={this.handleFilter}/>
      </div>  
    );
  }
}

export default connect(
  state => ({ filter: state.filter }),
  { applyFilter }
)(Filter);