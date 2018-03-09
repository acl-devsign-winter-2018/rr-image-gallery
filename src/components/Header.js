import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Error from './app/Error';

export default class Header extends Component{
  render(){
    return (
      <header id="header">
        <h1 id='headerH1'>Image Gallery</h1>
        <ul id="headerUl">
          <li id="headerLi"><Link to="/">Home</Link></li>
        </ul>
        <Error/>
      </header>
    );
  }
}