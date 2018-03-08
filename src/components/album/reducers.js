export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUM_LOAD = 'ALBUM_LOAD';
export const IMAGE_ADD = 'IMAGE_ADD';
export const IMAGE_DELETE = 'IMAGE_LOAD';

export function albums(state = [], { type, payload }) {
  switch (type) {
    case ALBUMS_LOAD:
      return payload;
    case ALBUM_LOAD:
      return payload;
    case IMAGE_DELETE:
      return state.filter(album => album.id !== payload);
    case IMAGE_ADD: 
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}
