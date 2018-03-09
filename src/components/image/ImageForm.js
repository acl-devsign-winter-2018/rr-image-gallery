import React, { Component } from 'react';
import './imageForm.css';
import { connect } from 'react-redux';

class ImageForm extends Component {

  state = {
    url: '',
    description: '',
    title: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      ...this.state,
      album: this.props.album
    })
      .then(() => {
        this.setState({
          url: '',
          description: '',
          title: ''
        });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {

    const { url, description, title } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="image-form">
        <fieldset>
          <legend className="clip">Add an Image</legend>

          <label htmlFor="title"> Title:
          <input name="title" value={title} onChange={this.handleChange} placeholder="Provocative Descriptor..."/>
          </label>

          <label htmlFor="url"> Url:
          <input name="url" value={url} onChange={this.handleChange} placeholder="https://example.jpg"/>
          </label>

          <label htmlFor="description"> Description:
          <textarea name="description" value={description} placeholder="Say something about the image..." onChange={this.handleChange}/>
          </label>
        </fieldset>
        <button type="submit">Add</button>

      </form>
    );
  }
}

export default connect(
  (state) => ({ album: state.album.id })
)(ImageForm);