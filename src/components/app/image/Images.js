import React, { Component } from 'react';
import './Image.css';
import { connect } from 'react-redux';
import { loadImage, addImage } from './actions';
// import ImageForm from './ImageForm';
import Image from './Image';


class Images extends Component {


  componentDidMount() {
    this.handleLoad();
  }

  handleLoad = () => {
    loadImage();
  };

  render() { 
    const { images } = this.props;
    return (
      <section className="main-container maxwidth-wrap">
        {/* <div className="add-contain">
          <ImageForm onEdit={addImage}/>
        </div> */}
        <ul className="image-ul">
          {images.map(album => <Image key={album.id} {...album}/>)}
        </ul>

      </section>
    );
  }
}

export default connect(
  state => ({ images: state.images }),
  { loadImage, addImage }
)(Images);