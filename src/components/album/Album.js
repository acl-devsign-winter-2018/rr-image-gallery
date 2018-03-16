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
    const { addImage } = this.props;

    return (
      <div>
        <ul>
          <Image/>
          <Image/>
          <Image/>
        </ul>
        <AddImage onEdit={addImage}/>
      </div>
    );
  }
}

export default connect(
  // props => ({
  //   id: props.match.params.id 
  // }),
  null,
  { addImage, loadAlbum }
)(Album);

