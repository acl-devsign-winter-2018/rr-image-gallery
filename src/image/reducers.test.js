import { image, IMAGE_CREATE, IMAGE_DESTROY } from './reducers';


it('Had a default of an empty array', () => {
  const state = image(undefined, {});
  expect(state).toEqual([]);
});

const imageToAdd = {
  title: 'bunny',
  url: 'http//bunny',
  image: 'Jbunny',
  description: 'a bunch of bunnys'
};

it('Add an image', () => {
  const state = image([], { type: IMAGE_CREATE, payload: imageToAdd });
  expect(state).toEqual([imageToAdd]);
});

it('Destroy an image', () => {
  const state = image([imageToAdd], { type: IMAGE_DESTROY, payload: 123 });
  expect(state).toEqual([]);
});
