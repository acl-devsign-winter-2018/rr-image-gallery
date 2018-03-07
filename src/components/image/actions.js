import { IMAGE_ADD, IMAGE_REMOVE, FILTER_APPLY } from './reducers';
import galleryApi from '../../services/galleryApi';

const album = '5a9defd1525d4500212b810a';

export function applyFilter(filter) {
  return {
    type: FILTER_APPLY,
    payload: filter
  };
}

export function addImage(image) { //check if image is actually being added to the proper place?
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