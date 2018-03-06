import { IMAGE_CREATE, IMAGE_DESTROY, IMAGE_LOAD } from './reducers';
import imageApi from '../../services/imageApi';

export function loadImage() {
  return dispatch => {
    return imageApi.load()
      .then(image => {
        dispatch({
          type: IMAGE_LOAD,
          payload: image
        });
      });
  };
}

export function addImage(image) {

  return (dispatch=> {
    return imageApi.add(image)
      .then(savedImage => {
        const action = {
          type: IMAGE_CREATE,
          payload: savedImage
        };
        dispatch(action);
      });
  });
}
  
export function destroyImage(id) {
  return dispatch => {
    return imageApi.remove(id)
      .then(() => {
        dispatch({
          type: IMAGE_DESTROY,
          payload: id
        });
      });
  };
}  