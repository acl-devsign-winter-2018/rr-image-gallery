import { IMAGE_ADD, IMAGE_REMOVE, FILTER_APPLY } from './reducers';
import galleryApi from '../../services/galleryApi';

export function applyFilter(filter) {
  return {
    type: FILTER_APPLY,
    payload: filter
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