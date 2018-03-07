import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadAlbum } from './actions';
import Images from '../image/Images';

class AlbumDetail extends Component {
  
  componentDidMount() {
    const { albumId, loadAlbum } = this.props;
    loadAlbum(albumId);
  }

  render() {
    const { album } = this.props;
    const { name } = album;
    
    return (
      <Fragment>
        <h1>{name}</h1>
        <Images/>
      </Fragment>
    );
  }
}

export default connect(
  (state, props) => ({ 
    album: state.album,
    albumId: props.match.params.id //brings in the album id from url
  }),
  { loadAlbum }
)(AlbumDetail);