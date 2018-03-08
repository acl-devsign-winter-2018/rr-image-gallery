import React, { Component } from 'react';



export default class addImageForm extends Component{
  constructor(props){
    super(props);
    this.state = { 
      title: '', url: '', description: '',
      ...props
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });
    this.setState({ title: '', url: '', description: '' });
  };

  render(){
    const { title, url, description } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='title'>
        Image Title:<input required name='title' placeholder = 'Title' value={title} onChange={this.handleChange}/>
        </label>
        <label htmlFor='url'>
        Image URL:<input required name='url' placeholder = 'Image URL' value={url} onChange={this.handleChange}/>
        </label>
        <label htmlFor='title'>
        Description:<input name='description' placeholder = 'Enter description (optional)' value={description} onChange={this.handleChange}/>
        </label>
        <button type='submit'>Add Image</button>
      </form>
    );
  }

}