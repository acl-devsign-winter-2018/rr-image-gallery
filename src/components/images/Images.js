import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage, loadImages } from './actions';
import Image from './Image';

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
      <section className="images">
        <ul>
          {images.map(image => <Image key={image.id} {...image}/>)}
        </ul>
      </section>
    );
  }
}

export default connect (
  state => ({ images: state.images }),
  { addImage })(loadImages);