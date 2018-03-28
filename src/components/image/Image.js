import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { destroyImage } from './actions';


class Image extends PureComponent {

  render() {

    const { id, description, url, destroyImage, title, albumId } = this.props;

    return (
      <div className="image">
        <h1>{title}</h1>
        
        <img src={url} alt={description}/>
        <p>{description}</p>
        { (albumId === '5a9ef45dd22df00021b2c67d') ?
          <button onClick={() => destroyImage(id)}>Delete</button>
          :
          null
        }
      </div>
    );
  }
}

export default connect(
  null,
  { destroyImage }
)(Image);