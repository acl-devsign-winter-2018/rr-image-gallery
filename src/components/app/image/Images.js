import React, { Component } from 'react';
import './Image.css';
import { connect } from 'react-redux';
import { loadImage, addImage } from './actions';
import ImageForm from './ImageForm';
import Image from './Image';


class Images extends Component {


  // componentDidMount() {
  //   this.handleLoad();
  // }

  // handleLoad = () => {
  //   loadImage();
  // };

  render() { 
    const { images, addImage } = this.props;
    return (
      <section className="main-container maxwidth-wrap">
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
  state => ({ images: state.images }),
  { loadImage, addImage }
)(Images);