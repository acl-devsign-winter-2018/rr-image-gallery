export const IMAGE_ADD = 'IMAGE_ADD';
export const IMAGE_REMOVE = 'IMAGE_REMOVE';
export const IMAGE_LOAD = 'IMAGE_LOAD';


export function images(state = [], { type, payload }) {


  switch(type) {
    case IMAGE_LOAD:
      return payload;
    case IMAGE_ADD:
      return {
        ...state, 
        images: [...state.images, payload]
      };
    case IMAGE_REMOVE:
      // return state.filter(image => image.id !== payload);
      console.log('i am state', state);
      console.log('******************i am payload', payload);

      return { images: state.images.filter(image => image.id !== payload) };

    default: 
      return state;
  }
}