import React, { PureComponent } from 'react';

export default class ImageForm extends PureComponent {
  constructor(props){
    super(props);
    this.state = { 
      title: '', url: '', description: '',
      ...props
    };
  }


  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    })
      .then(() => {
        this.setState({
          url: '',
          description: '',
          title: ''
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
        <label htmlFor="title"> Title:
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