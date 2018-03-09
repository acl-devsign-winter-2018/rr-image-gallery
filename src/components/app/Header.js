import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Error from './Error';


export default class Header extends Component {
  
  state = {
    id: '5a9ee071d22df00021b2c65c'
  };

  render() {
    const { id } = this.state.id;
    return (
      <header>
        <h1>Image Galleries</h1>
        <nav>
          <ul>
            <li><Link to="/albums">All Albums</Link></li>
          </ul>
        </nav>
        <Error/>
      </header>
    );
  }
}