export const IMAGE_ADD = 'IMAGE_ADD';
// export const ALBUM_UPDATE = 'ALBUM_UPDATE';
export const IMAGE_REMOVE = 'IMAGE_REMOVE';
export const IMAGE_LOAD = 'IMAGE_LOAD';

export function images(state = [], { type, payload }) {
  switch(type) {

    case IMAGE_LOAD:
      return payload.images;

    case IMAGE_ADD:
      return [
        ...state,
        payload
      ];

    case IMAGE_REMOVE:
      return state.filter(image => image.id !== payload);

    // case ALBUM_UPDATE: {
    //   const index = state.findIndex(album => album.id === payload.id);
    //   return [
    //     ...state.slice(0, index),
    //     { ...state[index], ...payload },
    //     ...state.slice(index + 1)
    //   ];
    // }

    default:
      return state;
  }
}