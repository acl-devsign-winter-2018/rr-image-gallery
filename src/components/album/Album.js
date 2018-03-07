import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './album.css';

export default class Albums extends Component {
  
  render() {
    const { id, name } = this.props;

    return (
      <li className="album-item">
        <Link to={`/albums/${id}`}><span className="fa fa-caret-right"></span> {name}</Link>
      </li>
    );
  }
}