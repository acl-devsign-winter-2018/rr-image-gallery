import { ALBUMS_LOAD, ALBUM_LOAD } from './reducers';
import albumApi from '../../../services/albumApi';

export function loadAlbums() {
  return {
    type: ALBUMS_LOAD,
    payload: albumApi.loadAlbums()
  };
}

export function loadAlbum(Id) {
  return {
    type: ALBUM_LOAD,
    payload: albumApi.load(Id)
  };
}