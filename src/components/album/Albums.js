import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadAlbums } from './actions';
import Album from './Album';

class Albums extends Component {
  
  componentDidMount() {
    this.props.loadAlbums();
  }

  render() {
    const { albums } = this.props;
    
    return (
      <Fragment>
        <h1>Pick an Album</h1>
        <ul>
          {albums.map(album => <Album key={album.id} {...album}/>)}
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  state => ({ albums: state.albums }),
  { loadAlbums }
)(Albums);