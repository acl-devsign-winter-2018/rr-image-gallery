import React, { Component } from 'react';
import Images from '../images/Images';
import { connect } from 'react-redux';
import { loadAlbum } from './actions';
import { Link } from 'react-router-dom';

class Album extends Component {
  
  componentDidMount() {
    this.handleLoad();
  }
  
  handleLoad() {
    this.props.loadAlbum();
  }

  render() {
    const { id, name } = this.props;

    return (
      <li>
        <Link to={`/albums/${id}`}><span>{name}</span></Link>
      </li>
    );
  }
}

export default connect(
  (state) => ({ 
    album: state.album }),
  { loadAlbum }
)(Album);