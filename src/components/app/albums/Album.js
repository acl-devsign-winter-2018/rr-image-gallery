import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Album.css';

export default class Album extends Component {
  
  render() {
    const { id, name } = this.props;

    return (
      <li className="album-li">
        <Link to={`/albums/${id}`}>{name}</Link>
      </li>
    );
  }
}