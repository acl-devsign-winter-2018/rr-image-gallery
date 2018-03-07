import React, { Component } from 'react';
import Images from '../images/Images';
import { connect } from 'react-redux';
import { loadAlbum } from './actions';

class Album extends Component {
  
  componentDidMount() {
    this.handleLoad();
  }
  
  handleLoad() {
    this.props.loadAlbum();
  }

  render() {
    const { album } = this.props;
    const { name } = album;
    return (
      <div>
        <h1>{name}</h1>
        <Images/>
      </div>
    );
  }
}

export default connect(
  state => ({ album: state.album }),
  { loadAlbum }
)(Album);