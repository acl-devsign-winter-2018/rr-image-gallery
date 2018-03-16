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
          <label htmlFor="title">
            <input required id="title" name="title"value={title} placeholder="Image Title" onChange={this.handleChange}/>
          </label>

          <label htmlFor="description">
            <input required id="description" name="description" value={description} placeholder="Image Description" onChange={this.handleChange} />
          </label>

          <label htmlFor="url">
            <input required id="url" name="url" value={url} placeholder="Image URL" onChange={this.handleChange}/>
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}