// export const IMAGE_LOAD = 'IMAGE_LOAD';
export const IMAGE_ADD = 'IMAGE_ADD';
export const IMAGE_REMOVE = 'IMAGE_REMOVE';
import { ALBUM_LOAD } from '../album/reducers';

export function imagesByAlbum(state = [], { type, payload }) {
  switch(type) {

    case ALBUM_LOAD:
      return payload.images;

    case IMAGE_ADD:
      return [
        ...state,
        payload
      ];

    case IMAGE_REMOVE:
      return state.filter(a => a.id !== payload);

    default:
      return state;
  }
}