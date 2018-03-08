import { ALBUMS_LOAD, ALBUM_LOAD, IMAGE_ADD, IMAGE_DELETE } from './reducers';
import galleryApi from '../../services/galleryApi';


export function loadAlbums() {
  return {
    type: ALBUMS_LOAD,
    payload: galleryApi.loadAll()
  };
}

export function loadAlbum(id) {
  return {
    type: ALBUM_LOAD,
    payload: galleryApi.load(id)
  };
}

export function addImage(image) {
  return {
    type: IMAGE_ADD,
    payload: galleryApi.add(image)
  };
}

export function deleteImage(id) {
  return {
    type: IMAGE_DELETE,
    payload: galleryApi.remove(id).then(() => id)
  };
}
