import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage, loadImages } from './actions';
import Image from './Image';
import ImageForm from './ImageForm';
import './images.css';
import Filter from './Filter';
import { filteredImagesSelector } from './reducers';

class Images extends Component {

  render() {
    const { images, addImage } = this.props;
    
    return (
      <div className="images-box">
        <Filter/>
        <ImageForm onComplete={addImage}/>
        <ul className="images">
          {images.map(image => <Image key={image.id} {...image}/>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ images: filteredImagesSelector(state) }), //pass in the entire state as selector takes care of it
  { addImage, loadImages }
)(Images);