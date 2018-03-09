import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage, loadImages } from './actions';
import Image from './Image';
import ImageForm from './ImageForm';
import './images.css';
import Filter from './Filter';
import { filteredImagesSelector } from './reducers';

class Images extends Component {

  state = {
    visible: false
  };

  toggleForm = () => {
    this.setState(prev => ({
      visible: !prev.visible
    }));
  };

  render() {
    const { images, addImage } = this.props;
    const { visible } = this.state;
    
    return (
      <div className="images-box">
        <Filter/>
        <button className="toggle-form-button" onClick={this.toggleForm}>{
          visible ? 'Hide Form' : 'Add an Image' 
        }</button>
        { visible && <ImageForm onComplete={addImage}/> }
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