import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applyFilter } from './actions';

class Filter extends Component {

  handleFilter = ({ target }) => {
    this.props.applyFilter(target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <form className="filter-form">
        <label> Filter:
        <input value={filter} onChange={this.handleFilter}/>
        </label>
      </form>
    );
  }
}

export default connect(
  state => ({ filter: state.filter }),
  { applyFilter }
)(Filter);