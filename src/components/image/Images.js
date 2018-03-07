import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage, loadImages } from './actions';
import Image from './Image';
import ImageForm from './ImageForm';
import './images.css';

class Images extends Component {

  render() {
    const { images, addImage } = this.props;
    
    return (
      <div className="images-box">
        <ImageForm onComplete={addImage}/>
        <ul className="images">
          {images.map(image => <Image key={image.id} {...image}/>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ images: state.images }),
  { addImage, loadImages }
)(Images);