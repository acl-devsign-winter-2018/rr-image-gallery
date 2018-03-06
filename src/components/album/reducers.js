export const ALBUM_LOAD = 'ALBUM_LOAD';
export const ALBUM_ADD = 'ALBUM_ADD';


export function album(state = [], { type, payload }) {
  switch(type) {

    case ALBUM_LOAD:
      return payload;

    case ALBUM_ADD:
      return [
        ...state,
        payload
      ];



    default:
      return state;

  }
}