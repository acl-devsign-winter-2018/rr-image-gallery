import { ALBUM_LOAD } from './reducers';
import albumsApi from '../../services/albumsApi';

export function loadAlbum() {
  return {
    type: ALBUM_LOAD,
    payload: albumsApi.load()
  };
}



// export function addAlbum(album) {
//   return {
//     type: ALBUM_ADD,
//     payload: albumsApi.add(album)
//   };
// }

// export function removeAlbum(id) {
//   return {
//     type: ALBUM_REMOVE,
//     payload: albumsApi.remove(id).then(() => id)
//   };
// }