import { IMAGE_CREATE, IMAGE_DESTROY, IMAGE_LOAD, APPLY_FILTER, ALBUM_LOAD, } from './reducers';
import imageApi from '../../services/imageApi';

// const album = '5a9ef45dd22df00021b2c67d';

export function loadImages(albumId) {
  return {
    type: IMAGE_LOAD,
    payload: imageApi.load(albumId)
  };
}

export function addImage(imgObj) {
  return {
    type: IMAGE_CREATE,
    payload: imageApi.add(imgObj)
  };
}

export function destroyImage(imageId) {
  return {
    type: IMAGE_DESTROY,
    payload: imageApi.remove(imageId).then(() => imageId)
  };
}

export function loadAlbums(){
  return {
    type: ALBUM_LOAD,
    payload: imageApi.allAlbums()
  };
}

export function applyFilter(filter){
  return {
    type: APPLY_FILTER,
    payload: filter
  };
}