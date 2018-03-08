import React, { Component } from 'react';
import './styles/addImage.css';

export default class AddImage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      url: '',
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
      <form onSubmit={this.handleSubmit} className="addImage">
        <div className="addInput">
          <label htmlFor="title">Image Title
          <input required id="title" value={title} onChange={this.handleChange}name="title"/>
          </label>

          <label htmlFor="description">Image Description
          <input required id="description" name="description" value={description} onChange={this.handleChange}/>
          </label>

          <label htmlFor="url">Image URL
          <input required id="url" name="url" value={url} onChange={this.handleChange}/>
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}