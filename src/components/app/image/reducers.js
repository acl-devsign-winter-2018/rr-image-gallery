export const IMAGE_ADD = 'IMAGE_ADD';
// export const ALBUM_UPDATE = 'ALBUM_UPDATE';
export const IMAGE_REMOVE = 'IMAGE_REMOVE';
export const IMAGE_LOAD = 'IMAGE_LOAD';
export const APPLY_FILTER = 'APPLY_FILTER';
import { createSelector } from 'reselect';
import { ALBUM_LOAD } from '../albums/reducers';

const filterSelector = state => state.filter;
const imagesSelector = state => state.images;

export const filteredImagesSelector = createSelector(
  [filterSelector, imagesSelector],
  (filter, images) => {
    if(!filter) return images;
    return images.filter(image => {
      return (image.description.toLowerCase().includes(filter.toLowerCase()) || image.title.toLowerCase().includes(filter.toLowerCase()));
    }
    );
  }
);

export function filter(state = '', { type, payload }) {
  switch(type) {
    case APPLY_FILTER:
      return payload;

    case IMAGE_LOAD:
      return '';

    default:
      return state;
  }
}

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