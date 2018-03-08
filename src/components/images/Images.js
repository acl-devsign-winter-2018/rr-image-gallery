import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages, addImage, loadAlbums } from './actions';
import Image from './Image';
import AddImageForm from '../form/addImageForm';
import Filter from './Filter';
import { filteredImageSelector } from './reducers';
import '../styles/main.css';

class Images extends Component {

  componentDidMount(){
    this.props.loadImages(this.props.id);
  }
  
  render(){
    const { image, addImage, id } = this.props;
  
    return (
      <div>
        <section id="formFilter">
          {(this.props.id === '5a9ec831d22df00021b2c649') ?
            <div id="imageForm">
              ADD AN IMAGE <AddImageForm id={id} onEdit={addImage}/>
            </div>
            :
            null
          } 
        </section>
        <div id="filterContainer">
          Filter:<Filter/>
        </div>
        <ul id='imageUl'>
          {image.map(image => <Image albumId={this.props.id} key={image.id} {...image}/>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({ 
    image: filteredImageSelector(state),
    album: state.album,
    id: props.match.params.id
  }),
  { loadImages, addImage, loadAlbums }
)(Images);