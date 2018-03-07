import { IMAGE_ADD, IMAGE_REMOVE } from './reducers';
import galleryApi from '../../services/galleryApi';

const album = '5a9defd1525d4500212b810a';

export function addImage(image) {
  image.album = album;
  return {
    type: IMAGE_ADD,
    payload: galleryApi.add(image)
  };
}

export function removeImage(id) {
  return {
    type: IMAGE_REMOVE,
    payload: galleryApi.remove(id).then(() => id)
  };
}