export const IMAGE_ADD = 'IMAGE_ADD';
export const IMAGE_REMOVE = 'IMAGE_REMOVE';
export const IMAGE_LOAD = 'IMAGE_LOAD';
import { ALBUM_LOAD } from '../album/reducers';

export function imagesByAlbum(state = [], { type, payload }) {
  switch(type) {

    case ALBUM_LOAD:
      return payload.reduce((map, album) => {
        map[album.id] = album.images;
        return map;
      }, {});

    case IMAGE_LOAD:
      return payload.images;

    case IMAGE_ADD:
      return [
        ...state,
        payload
      ];

    case IMAGE_REMOVE:
      return state.filter(image => image.id !== payload);

    default:
      return state;
  }
}