import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAlbums } from './actions';
import Album from './Album';
import './styles/albums.css';

export class Albums extends Component {

  componentDidMount() {
    this.handleLoad();
  }
  
  handleLoad = () => {
    this.props.loadAlbums();
  }

  render() {
    const { albums } = this.props;
    console.log(albums);
    return (
      <div>
        <ul className="albumList">
          {albums.map(album => {
            return <li key={album.id}>{album.name}</li>;
          })}
        </ul>
        <Album/>
      </div>
    );
  }
}

export default connect(
  state => ({ albums: state.albums }),
  { loadAlbums }
)(Albums);