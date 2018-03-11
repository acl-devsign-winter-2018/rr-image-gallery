import { IMAGE_REMOVE, IMAGE_ADD, APPLY_FILTER } from './reducers';
import albumApi from '../../../services/albumApi';

export function applyFilter(filter) {
  return {
    type: APPLY_FILTER,
    payload: filter
  };
}

// const album = '5a9edd23d22df00021b2c654';
export function addImage(image) {
  // image.album = album;
  return {
    type: IMAGE_ADD,
    payload: albumApi.add(image)
  };
}

export function removeImage(id) {
  return {
    type: IMAGE_REMOVE,
    payload: albumApi.remove(id).then(() => id)
  };
}