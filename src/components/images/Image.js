import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeImage } from './actions';
import './images.css';

class Image extends Component {

  render() {
    const { id, title, description, removeImage, url } = this.props;

    return (
      <li className="image">
        <h3>{title}</h3>
        <figure>
          <img src={url} alt={title}/>
          <figcaption>{description}</figcaption>
          <button onClick={() => removeImage(id)}>Remove</button>
        </figure>
      </li>
    );
  }
}

export default connect(
  state => state,
  { removeImage }
)(Image);