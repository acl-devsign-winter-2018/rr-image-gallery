import { ALBUM_LOAD, ALBUMS_LOAD } from './reducers';
import galleryApi from '../../services/galleryApi';

export function loadAlbum(albumId) {
  return dispatch => {
    return galleryApi.load(albumId)
      .then(album => {
        dispatch({
          type: ALBUM_LOAD,
          payload: album
        });
      });
  };
}
export function loadAlbums() {
  return dispatch => {
    return galleryApi.getAllAlbums()
      .then(albums => {
        dispatch({
          type: ALBUMS_LOAD,
          payload: albums
        });
      });
  };
}