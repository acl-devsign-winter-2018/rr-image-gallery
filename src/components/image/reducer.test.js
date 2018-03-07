import  { images, IMAGE_ADD, IMAGE_REMOVE, IMAGE_LOAD } from './reducer';

const imageToAdd = { id: 123, title: 'My Life', url: 'none.jpg', album: 1, description: 'moody' };

it('loads images', () => {
  const imagesToLoad = [
    imageToAdd,
    { id: 456, title: 'My Life Again', url: 'none2.jpg', album: 2, description: 'moodier' },
  ];

  const state = images([], { type: IMAGE_LOAD, payload: imagesToLoad });
  expect(state).toEqual(imagesToLoad);
});

it('adds an image', () => {
  const state = images([], { type: IMAGE_ADD, payload: imageToAdd });
  expect(state).toEqual([imageToAdd]);
});

it('removes an image', () => {
  const state = images([imageToAdd], { type: IMAGE_REMOVE, payload: 123 });
  expect(state).toEqual([]);
});

it('defaults to empty array', () => {
  const state = images(undefined, {});
  expect(state).toEqual([]);
});
