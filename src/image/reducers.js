export const IMAGE_CREATE =  'IMAGE_CREATE';
export const IMAGE_DESTROY =  'IMAGE_DESTROY';
export const IMAGE_LOAD =  'IMAGE_LOAD';


export function image(state = [], { type, payload }) {
  switch(type) {
    case IMAGE_LOAD:
      return payload.images;
    case IMAGE_CREATE:
      return [
        ...state,
        payload
      ];
    

    case IMAGE_DESTROY:
      return state.filter(n => n.id !== payload.id);

    default:
      return state;
  }
}