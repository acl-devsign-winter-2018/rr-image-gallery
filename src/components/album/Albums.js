import React, { Component } from 'react';
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
      <div>
        <h2>Albums</h2>
        <ul>
          {albums.map(album => {
            return <Album key={album.id} {...album}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ albums }) => ({ albums }),
  { loadAlbums }
)(Albums);