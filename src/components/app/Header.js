import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Error from './Error';
import Loading from './Loading';


export default class Header extends Component {
  
  render() {
    return (
      <header>
        <h1>Image Galleries</h1>
        <nav>
          <ul>
            <li><Link to="/albums">All Albums</Link></li>
          </ul>
        </nav>
        <Error/>
        <Loading/>
      </header>
    );
  }
}