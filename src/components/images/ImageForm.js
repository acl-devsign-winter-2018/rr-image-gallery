import React, { Component } from 'react';
import './imageForm.css';

export default class ImageForm extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    title: '',
    url: '',
    description: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      ...this.state
    })
      .then(() => {
        this.setState({
          title: '',
          url: '',
          description: ''
        });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  };

  render() {
    const { title, url, description } = this.state;

    return (
      <form className="image-form" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend className="inputs">Add a Photo</legend>

          <label htmlFor="title">
            <input name="title" value={title} onChange={this.handleChange} placeholder="Image Title"/>
          </label>

          <label htmlFor="url">
            <input name="url" value={url} onChange={this.handleChange} placeholder="Image URL"/>
          </label>

          <label htmlFor="description">
            <input name="description" value={description} onChange={this.handleChange} placeholder="Description"/>
          </label>

        </fieldset>

        <button type="submit">Add</button>
      </form>

    );
  }
}