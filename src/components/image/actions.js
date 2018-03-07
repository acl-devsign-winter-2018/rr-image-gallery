import { IMAGE_ADD, IMAGE_REMOVE, IMAGE_LOAD } from './reducer';
import galleryApi from '../../services/galleryApi';

export function loadImages() {
  return {
    type: IMAGE_LOAD,
    payload: galleryApi.load()
  };
}
export function addImage(image) {
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