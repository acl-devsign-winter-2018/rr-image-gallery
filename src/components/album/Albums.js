import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadAlbums } from './actions';
import Album from './Album';
import './albums.css';

class Albums extends Component {
  
  componentDidMount() {
    this.props.loadAlbums();
  }

  render() {
    const { albums } = this.props;
    
    return (
      <div className="albums-list">
        <h1>Albums</h1>
        <ul>
          {albums.map(album => <Album key={album.id} {...album}/>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ albums: state.albums }),
  { loadAlbums }
)(Albums);