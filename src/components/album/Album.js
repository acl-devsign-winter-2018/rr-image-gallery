import React, { Component } from 'react';
// import Image from '../image/Image';
import { connect } from 'react-redux';
import { addAlbum, loadAlbum } from './actions';

class Album extends Component {
  
  componentDidMount() {
    this.props.loadAlbum();
  }

  render() {
    const { addAlbum, images } = this.props;
    return (
      <div>
        <ul className="images">
          {images.map(image => {
            return <Image key={image.id} {...image}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ images: state.images }),
  { addAlbum, loadAlbum }
)(Album);