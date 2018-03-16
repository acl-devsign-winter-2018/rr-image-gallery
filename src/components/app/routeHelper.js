import galleryApi from '../../services/galleryApi';

const createElement = (Album, props) => 
  <Album key={props.match.params.id} {...props}/>