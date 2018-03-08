import { IMAGE_ADD, IMAGE_REMOVE, ALBUM_LOAD } from './reducers';
import albumsApi from '../../services/albumsApi';

const album = '5a9ee071d22df00021b2c65c';

export function loadImages(id) {
  return {
    type: ALBUM_LOAD,
    payload: albumsApi.load(id)
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