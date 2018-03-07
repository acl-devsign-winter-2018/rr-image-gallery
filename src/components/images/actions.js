import { IMAGE_ADD, IMAGE_REMOVE, IMAGE_LOAD } from './reducers';
import albumsApi from '../../services/albumsApi';

const album = '5a9ee071d22df00021b2c65c';

export function loadImages() {
  return {
    type: IMAGE_LOAD,
    payload: albumsApi.load()
  };
}

export function addImage(image) {
  image.album = album;
  return {
    type: IMAGE_ADD,
    payload: albumsApi.add(image)
  };
}

export function removeImage(id) {
  return {
    type: IMAGE_REMOVE,
    payload: albumsApi.remove(id).then(() => id)
  };
}