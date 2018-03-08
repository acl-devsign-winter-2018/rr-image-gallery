export const IMAGE_ADD = 'IMAGE_ADD';
// export const ALBUM_UPDATE = 'ALBUM_UPDATE';
export const IMAGE_REMOVE = 'IMAGE_REMOVE';
export const IMAGE_LOAD = 'IMAGE_LOAD';
import { ALBUM_LOAD } from '../albums/reducers';

export function images(state = [], { type, payload }) {
  switch(type) {

    case ALBUM_LOAD:
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