import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddImage from './AddImage';
import Image from './Image';
import { addImage } from './actions';


class Album extends Component {
  render() {
    const { addImage } = this.props;

    return (
      <div>
        <AddImage onEdit={addImage}/>
        <ul>
          <Image/>
          <Image/>
          <Image/>
        </ul>
      </div>
    );
  }
}

export default connect(
  null,
  { addImage }
)(Album);