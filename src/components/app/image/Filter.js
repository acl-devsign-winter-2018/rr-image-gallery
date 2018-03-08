import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applyFilter } from './actions';
import './Image.css';

class Filter extends Component {

  handleFilter = ({ target }) => {
    this.props.applyFilter(target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <form className="filter-form">
        <label htmlFor="filter"> Filter:
        <input id="filter" value={filter} onChange={this.handleFilter} placeholder="ex: Type a word"/>
        </label>
      </form>
    );
  }
}

export default connect(
  state => ({ filter: state.filter }),
  { applyFilter }
)(Filter);