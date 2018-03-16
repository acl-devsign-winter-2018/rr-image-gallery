import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddImage from './AddImage';
import Image from './Image';
import { addImage, loadAlbum } from './actions';
import './styles/album.css';

class Album extends Component {
  
  componentDidMount() {
    const { id } = this.props;
    this.props.loadAlbum(id);
  }

  render() {
    const { addImage, images } = this.props;

    return (
      <div className="imageWrapper"> 
        <AddImage onEdit={addImage}/>
        <div id="divider"></div>
        <div id="imageWrap">
          {images && <Image images={images}/>}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ album }, { match })  => ({ 
    images: album.images,
    id: match.params.id
  }),

  { addImage, loadAlbum }
)(Album);

