import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeImage } from './actions';


class Image extends Component{
 
  render() {
    const { title, url, description, id, removeImage, albumId } = this.props;
    return (
      <div id='imgContainer'>
        <h1>{title}</h1>
        <img src={url} alt={description}/>
        <p>{description}</p>
        { (albumId === '5a9ec831d22df00021b2c649') ? 
          <button onClick={() => removeImage(id)}>Delete</button>
          :
          null
        } 
      </div>
    );

  }
}

export default connect (
  state => state,
  { removeImage }

)(Image);