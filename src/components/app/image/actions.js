import { ALBUM_LOAD, IMAGE_REMOVE, IMAGE_ADD } from './reducers';
import albumApi from '../../../services/albumApi';


export const doLoadAlbum = api => () => {
  return {
    type: ALBUM_LOAD,
    payload: api.load()
  };
};

export function loadAlbum() {
  return {
    type: ALBUM_LOAD,
    payload: albumApi.load()
  };
}

const album = '5a9edd23d22df00021b2c654';
export function addImage(image) {
  image.album = album;
  return {
    type: IMAGE_ADD,
    payload: albumApi.add(image)
  };
}

// export function updateAlbum(album) {
//   return {
//     type: ALBUM_UPDATE,
//     payload: albumApi.update(album)
//   };
// }

export function removeImage(id) {
  return {
    type: IMAGE_REMOVE,
    payload: albumApi.remove(id).then(() => id)
  };
}