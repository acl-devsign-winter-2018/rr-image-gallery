import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage, loadImages } from './actions';
import ImageForm from './ImageForm';
import Image from './Image';
import './images.css';

class Images extends Component {
  componentDidMount() {
    this.props.loadImages(this.props.id);
  }
  
  render() {
    const { images, addImage, id } = this.props;
    
    return (
      <div className="images-container">
        {/* todo: add conditional if id === my id.  */}
        <ImageForm onComplete={addImage}/>
        <ul className="images">
          {images.map(image => <Image album={id} key={image.id} {...image}/>)}
        </ul>
      </div>
    );
  }
}

export default connect (
  (state, props) => ({ 
    images: state.imagesByAlbum,
    id: props.match.params.id }),
  { addImage, loadImages }
)(Images);