export const ALBUM_LOAD = 'ALBUM_LOAD';
export const ALBUMS_LOAD = 'ALBUMS_LOAD';

export function album(state = {}, { type, payload }) {
  switch(type) {
    
    case ALBUM_LOAD:
      return payload;
    
    default:
      return state;
  }
}

export function albums(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_LOAD:
      return payload;

    default: 
      return state;
  }
}