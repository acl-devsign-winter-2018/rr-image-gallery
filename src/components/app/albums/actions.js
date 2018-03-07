import { ALBUMS_LOAD } from './reducers';
import albumApi from '../../../services/albumApi';

export function loadAlbums() {
  return {
    type: ALBUMS_LOAD,
    payload: albumApi.loadAlbums()
  };
}