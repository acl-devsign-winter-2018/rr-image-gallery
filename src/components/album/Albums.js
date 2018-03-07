import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadAlbums } from './actions';

class Albums extends Component {
  componentDidMount() {
    this.props.loadAlbums;
  }

  return() {
    
    render() {
      const { albums } = this.props;
      
      return (
        <div>
          <h2>Albums</h2>
          <ul>
            {albums.map(album => (
              <li key={album.id}><Link to={`albums/${album.id}`}></Link></li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default connect(
  state => ({ albums: state.albums }),
  { loadAlbums }
)(Albums);