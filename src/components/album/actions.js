import { ALBUM_LOAD, ALBUMS_LOAD } from './reducers';
import albumsApi from '../../services/albumsApi';

export function loadAlbum(id) {
  return {
    type: ALBUM_LOAD,
    payload: albumsApi.load(id)
  };
}

export function loadAlbums() {
  return {
    type: ALBUMS_LOAD,
    payload: albumsApi.loadAlbums()
  };
}