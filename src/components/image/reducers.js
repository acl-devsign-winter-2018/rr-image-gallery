export const IMAGE_CREATE =  'IMAGE_CREATE';
export const IMAGE_DESTROY =  'IMAGE_DESTROY';
export const IMAGE_LOAD =  'IMAGE_LOAD';
export const ALBUM_LOAD = 'ALBUM_LOAD';
export const APPLY_FILTER = 'APPLY_FILTER';
import { createSelector } from 'reselect';



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
      return state.filter(image => image.id !== payload.id);

    default:
      return state;
  }
}

export function album(state = [], { type, payload }) {
  switch(type) {
    case ALBUM_LOAD:
      return [
        ...state,
        ...payload
      ];
    default:
      return state;
  }
}

const filterSelector = state => state.filter;
const imageSelector = state => state.image;

export const filteredImageSelector = createSelector(
  [filterSelector, imageSelector],
  (filter, images) => {
    if(!filter) return images;
    return images.filter(image => image.title.includes(filter) || image.description.includes(filter));
  }
);

export function filter(state = '', { type, payload }){
  switch(type){
    case APPLY_FILTER:
      return payload;
    case IMAGE_LOAD:
      return '';
    default:
      return state;
  }
}