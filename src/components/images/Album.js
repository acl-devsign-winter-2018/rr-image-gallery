import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Album extends Component{
  render() {
    const { id, name } = this.props;
    return (
      <li key={id}><Link to={`/albums/${id}`}>{name}</Link></li>
    );
  }
}

export default connect (
  state => ({ album: state.album }),
  null
)(Album);