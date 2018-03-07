import { image, IMAGE_LOAD, IMAGE_ADD, IMAGE_REMOVE } from './reducers';

it('has default empty object', () => {
  const state = image(undefined, {});
  expect(state).toEqual([]);
});

const imageSample = { 
  title: 'Mosses', 
  url: 'http://mossphoto',
  album: 123,
  description: 'this is a photo',
  id: 777 
};  

it('loads images from api', () => {
  const state = image([], { type: IMAGE_LOAD, payload: imageSample });
  expect(state).toEqual(imageSample);
});

it('adds an image', () => {
  const state = image([], { type: IMAGE_ADD, payload: imageSample });
  expect(state).toEqual([imageSample]);
});

it('removes an image', () => {
  const state = image([imageSample], { type: IMAGE_REMOVE, payload: 777 });
  expect(state).toEqual([]);
});