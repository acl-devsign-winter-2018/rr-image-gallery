import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default class Image extends Component {

  render() {
    const { images } = this.props;
    return (
      <ul>
        {images.map(i => {
          return <li key={i.id}>
            <img src={i.url}/>
            <h2>{i.title}</h2>
            <p>{i.description}</p>
          </li>
        })}
      </ul>
    );
  }
}