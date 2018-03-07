import { ALBUMS_LOAD } from './reducers';
import albumApi from '../../../services/albumApi';

export function loadAlbums(Id) {
  return {
    type: ALBUMS_LOAD,
    payload: albumApi.loadAlbums(Id)
  };
}