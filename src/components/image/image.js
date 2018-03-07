//child of images
//will render the image and related elements for display
//will have button for removeImge here!

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeImage } from './actions';


class Image extends Component {
  render() {
    const { id, description, url, removeImage, title } = this.props;

    return (
      <li>
        <figure>
          <img src={url} alt={title}/>
          <figcaption>{description}</figcaption>
          <button onClick={()=> removeImage(id)}>REMOVE</button>
        </figure>
      </li>
    );
  }
}



export default connect(
  null, 
  { removeImage }
)(Image);
