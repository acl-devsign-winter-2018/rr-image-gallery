import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadAlbum } from './actions';

class Album extends Component {

  componentDidMount() {
    const { id, loadAlbum } = this.props;
    loadAlbum(id);
  }
  
  render() {
    const { id, name } = this.props;

    return (
      <li>
        <Link to={`/albums/${id}`}>
          {name} 
        </Link>
      </li>
    );
  }
}

export default connect(
  (state) => ({ 
    album: state.album,
  }),
  { loadAlbum }
)(Album);