import React, { Component} from 'react';
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
      <ul>
        {albums.map(album => <Album key={album.id} {...album}/>)}
      </ul>
    );
  }
}

export default connect(
  state => ({ albums: state.albums }),
  { loadAlbums }
)(Albums);