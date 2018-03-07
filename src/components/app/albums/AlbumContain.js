import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAlbums } from './actions';
import { Link } from 'react-router-dom';
import Images from '../image/Images';

class AlbumContain extends Component {
  
  componentDidMount() {
    const { Id, loadAlbums } = this.props;
    loadAlbums(Id);
  }

  render() {
    const { album } = this.props;
    
    return (
      <div>
        <h3><Link to="/">{album.name}</Link></h3>
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
  { loadAlbums }
)(AlbumContain);