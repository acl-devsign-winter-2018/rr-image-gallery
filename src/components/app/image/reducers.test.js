import { images, filter, APPLY_FILTER, IMAGE_ADD, IMAGE_REMOVE } from './reducers';
import { ALBUM_LOAD } from '../albums/reducers';

it('Has a default of empty array', () => {
  const state = images(undefined, {});
  expect(state).toEqual([]);
});

const imageToAdd = {
  id: 123,
  title: 'Album Title',
  url: 'image.jpg',
  album: 123,
  description: 'text'
};

it('filters', () => {
  const state = filter('', { type: APPLY_FILTER, payload: 'filter' });
  expect(state).toEqual('filter');
});

it('default filter', () => {
  const state = filter(undefined, {});
  expect(state).toEqual('');
});

it('Add Image', () => {
  const state = images([], { type: IMAGE_ADD, payload: imageToAdd });
  expect(state).toEqual([imageToAdd]);
});

it('Remove image', () => {
  const state = images([imageToAdd], { type: IMAGE_REMOVE, payload: 123 });
  expect(state).toEqual([]);
});


it('Loads images', () => {
  const imagesToLoad = { images: [
    imageToAdd,
    { id: 123, title: 'Album Title', url: 'image.jpg', album: 123, description: 'text' }
  ] };

  const state = images([], { type: ALBUM_LOAD, payload: imagesToLoad });
  expect(state).toEqual(imagesToLoad.images);
});