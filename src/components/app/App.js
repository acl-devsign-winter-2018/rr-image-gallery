import React, { Component } from 'react';
import Album from '../album/Album';
import './app.css';

export default class App extends Component {

  render() {
    return (
      <div className="main-body">
        <header id="main-header">
          <h1>Image Gallery</h1>
        </header>
        <main id="main-content">
          <Album/>
        </main>
        <footer id="main-footer">
        </footer>
      </div>
    );
  }
}
