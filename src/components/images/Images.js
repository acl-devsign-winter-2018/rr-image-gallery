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
      <div>
        <section id="add-form">
          {(this.props.id === '5a9ee071d22df00021b2c65c') ?
            <div id="imageForm">
              <ImageForm onComplete={addImage}/>
            </div>
            :
            <div></div>
          } 
        </section>
        <div className="images-container">
          <ul>
            {images.map(image => <Image album={id} key={image.id} {...image}/>)}
          </ul>
        </div>
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