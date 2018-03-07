//child of images

//will hold its own state
//willl have handle change and handle submit that resets state
//the onComplte function is called here (will be passed props from images)

import React, { Component } from 'react';

export default class ImageForm extends Component {

  state = {
    url: '',
    description: '',
    title: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      ...this.state
    })
      .then(() => {
        this.setState({
          url: '',
          description: '',
          title: '',
          album: '5a9f614c56745c0021e1b928'
        });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { url, description, title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          Title: 
          <input name="title" value={title} onChange={this.handleChange} placeholder="Enter title"/>

          Url:
          <input name="url" value={url} onChange={this.handleChange} placeholder="Enter url"/>
         
          Description:
          <input name="description" value={description} onChange={this.handleChange} placeholder="Enter description"/>

        </fieldset>
        <button type="submit">Add</button>
      </form>

      
    );
  }
}