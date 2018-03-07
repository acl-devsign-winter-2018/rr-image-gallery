import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage, loadImages } from './actions';
import ImageForm from './ImageForm';
import Image from './Image';
import './images.css';

class Images extends Component {
  componentDidMount() {
    this.handleLoading();
  }

  handleLoading() {
    this.props.loadImages();
  }
  
  render() {
    const { images, addImage } = this.props;
    
    return (
      <div className="images-container">
        <ImageForm onComplete={addImage}/>
        <ul className="images">
          {images.map(image => <Image key={image.id} {...image}/>)}
        </ul>
      </div>
    );
  }
}

export default connect (
  state => ({ images: state.imagesByAlbum }),
  { addImage, loadImages }
)(Images);