import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAlbum } from './actions';
import { Link } from 'react-router-dom';
import Images from '../image/Images';

class AlbumContain extends Component {
  
  componentDidMount() {
    const { Id, loadAlbum } = this.props;
    loadAlbum(Id);
  }

  render() {
    const { album } = this.props;
    const { name } = album;
    
    return (
      <div>
        <h3><Link to="/">{name}</Link></h3>
        <Images/>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({ 
    album: state.album,
    Id: props.match.params.id
  }),
  { loadAlbum }
)(AlbumContain);