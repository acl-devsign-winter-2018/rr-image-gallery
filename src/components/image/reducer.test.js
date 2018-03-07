import { images, IMAGE_ADD, IMAGE_REMOVE } from './reducers';
import { ALBUM_LOAD } from '../album/reducers';

const imageToAdd = {
  id: 111,
  title: 'test',
  url: 'test.png',
  album: 123,
  description: 'testing images'
};

it('loads images', () => {
  const imagesToLoad = { images: [
    imageToAdd,
    { id: 121, title: 'sneakers', url: 'nope.jpg', album: 123, description: 'swampy' }
  ] };
  const state = images([], { type: ALBUM_LOAD, payload: imagesToLoad });
  expect(state).toEqual(imagesToLoad.images);
});

it('default empty array', () => {
  const state = images(undefined, {});
  expect(state).toEqual([]);
});

it('adds an image', () => {
  const state = images([], { type: IMAGE_ADD, payload: imageToAdd });
  expect(state).toEqual([imageToAdd]);
});

it('removes an image', () => {
  const state = images([imageToAdd], { type: IMAGE_REMOVE, payload: 111 });
  expect(state).toEqual([]);
});