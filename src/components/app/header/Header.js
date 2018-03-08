import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Error from '../Error';

export default class Header extends Component {

  render() { 
    return (
      <header role="banner" id="header">
        <section className="head-container maxwidth-wrap">
          <Link to="/album"><h1 className="logo">Plant Lab</h1></Link>
          <nav>
            <ul>
              <li><Link to="/albums">Albums</Link></li>
              {/* <li><Link to="/images">Images</Link></li> */}
              {/* <Route path="/movies" render={() => <li>~</li>}/> */}
            </ul>
          </nav>
          <Error/>
        </section> 
      </header>
    );
  }
}