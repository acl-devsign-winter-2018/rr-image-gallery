import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { loadAlbums } from './actions';
import Album from '../albums/Album';

class Albums extends Component {
  componentDidMount() {
    this.props.loadAlbums();
  }

  render() {
    const { albums } = this.props;

    return (
      <div>
        <h3>Albums</h3>
        <ul className="album-ul">
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