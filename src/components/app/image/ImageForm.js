import React, { Component } from 'react';
import './Image.css';

export default class ImageForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      url: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });
    this.setState({ 
      title: '',
      description: '',
      url: ''
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title, description, url } = this.state;

    return (
      <form onSubmit = {this.handleSubmit} className="add-image">
        <label htmlFor="title"> Title: 
        <input required id="title" name="title" value={title} onChange={this.handleChange} placeholder="ex: Title"/>
        </label>

        <label htmlFor="description"> Description:
        <input required id="description" name="description" value={description} onChange={this.handleChange} placeholder="ex: Description"/>
        </label>
        
        <label htmlFor="url"> Url: 
        <input required id="url" name="url" value={url} onChange={this.handleChange} placeholder="ex: Url"/>
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }

}