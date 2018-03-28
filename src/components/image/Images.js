import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addImage, loadImages, loadAlbums } from './actions';
import Image from './Image';
import ImageForm from './ImageForm';
import Filter from './Filter';
import { filteredImageSelector } from './reducers';

class Images extends PureComponent {
  
  componentDidMount() {
    this.props.loadImages(this.props.id);
  }

  // handleLoad() {
  //   this.props.loadImages('5a9ef45dd22df00021b2c67d');
  // }

  render() {
    const { image, addImage, id } = this.props;

    return (
      <div>
        <section id="formFilter">
          {(this.props.id === '5a9ef45dd22df00021b2c67d') ?
            <div>
            Add an Image <ImageForm id={id} onEdit={addImage}/>
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