import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAlbums } from './actions';
import { Link } from 'react-router-dom';
import Album from './Album';
import './styles/albums.css';

export class Albums extends Component {

  componentDidMount() {
    this.props.loadAlbums();
  }
  
  render() {
    const { albums} = this.props;
    return (
      <div>
        <ul className="albumList">
          {albums.map(album => {
            return <li key={album.id}>
              <Link to={`/albums/${album.id}`}>{album.name}</Link>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({ 
  albums: state.albums,
}),
{ loadAlbums }
)(Albums);