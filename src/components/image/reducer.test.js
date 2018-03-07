import  { images, IMAGE_ADD, IMAGE_REMOVE, IMAGE_LOAD } from './reducer';



it('loads images', () => {
  const imagesToLoad = [
    { id: 123, title: 'My Life', url: 'none.jpg', album: 1, description: 'moody' },
    { id: 456, title: 'My Life Again', url: 'none2.jpg', album: 2, description: 'moodier' },
  ];

  const state = images([], { type: IMAGE_LOAD, payload: imagesToLoad });
  expect(state).toEqual(imagesToLoad);
});


