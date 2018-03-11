import React, { Component } from 'react';
import './Image.css';
import { connect } from 'react-redux';
import { loadImage, addImage } from './actions';
import ImageForm from './ImageForm';
import Image from './Image';
import Filter from './Filter';
import { filteredImagesSelector } from './reducers';



class Images extends Component {

  render() { 
    const { images, addImage } = this.props;

    return (
      <section className="main-container maxwidth-wrap">
        <Filter/>
        <div className="add-contain">
          <ImageForm onComplete={addImage}/>
        </div>
        <ul className="image-ul">
          {images.map(image => <Image key={image.id} {...image}/>)}
        </ul>

      </section>
    );
  }
}

export default connect(
  state => ({ images: filteredImagesSelector(state) }),
  { loadImage, addImage }
)(Images);