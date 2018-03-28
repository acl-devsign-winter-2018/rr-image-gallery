import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Album from './Album';
import { loadAlbums } from './actions';

class Albums extends PureComponent {

  componentDidMount(){
    if(this.props.albums.length === 0) this.props.loadAlbums();
  }
  
  render(){
    
    const { albums } = this.props;
    
    return (
      <ul id="albumUl">
        {albums.map((album => {
          return <Album key={album.id} {...album}/>;
        }))}
      </ul>
    );
  }
}

export default connect(
  state => ({ 
    albums: state.album,
    loading: state.loading
  }),
  { loadAlbums }
)(Albums);