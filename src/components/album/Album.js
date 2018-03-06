import React, { Component } from 'react';
import Images from '../images/Images';
import { connect } from 'react-redux';
import { addAlbum, loadAlbum } from './actions';


class Album extends Component {
  
  componentDidMount() {
    this.props.loadAlbum();
  }

  render() {
    const { addAlbum, name } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <Images/>
      </div>
    );
  }
}

export default connect(
  state => ({ images: state.images }),
  { addAlbum, loadAlbum }
)(Album);