import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddImage from './AddImage';
import Image from './Image';
import { addImage, loadAlbum } from './actions';


class Album extends Component {
  
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadAlbum(id);
  }

  render() {
    const { addImage, images } = this.props;

    return (
      <div> 
        {images && <Image images={images}/>}
        <AddImage onEdit={addImage}/>
      </div>
    );
  }
}

export default connect(state => ({ 
    images: state.album.images
  }),
  { addImage, loadAlbum }
)(Album);

