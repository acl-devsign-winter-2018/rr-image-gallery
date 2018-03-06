import { ALBUM_LOAD } from '../album/reducers';
import { IMAGE_ADD, IMAGE_REMOVE } from './reducers';
import albumsApi from '../../services/albumsApi';

export const doLoadAlbum = api => () => {
  return {
    type: ALBUM_LOAD,
    payload: api.load()
  };
};

export function loadAlbum() {
  return {
    type: ALBUM_LOAD,
    payload: albumsApi.load()
  };
}

export function addImage(album) {
  return {
    type: IMAGE_ADD,
    payload: albumsApi.addImage(album)
  };
}

export function removeImage(id) {
  return {
    type: IMAGE_REMOVE,
    payload: albumsApi.removeImage(id).then(() => id)
  };
}