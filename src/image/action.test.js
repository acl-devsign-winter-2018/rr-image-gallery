import { addImage, destroyImage, loadImage } from './actions';
import { IMAGE_CREATE, IMAGE_DESTROY, IMAGE_LOAD } from './reducers';

it('creates an add action', () => {
  const { type, payload } = addImage({  title: 'bunny',
    url: 'http//bunny',
    image: 'Jbunny',
    description: 'a bunch of bunnys' });
  expect(type).toBe(IMAGE_CREATE);
  const { title, url, image, description } = payload;
  expect(title).toBe('title');
  expect(url).toBe('url');
  expect(image).toBe('image');
  expect(description).toBe('description');
});

const imageToAdd = {
  title: 'bunny',
  url: 'http//bunny',
  image: 'Jbunny',
  description: 'a bunch of bunnys'
};



