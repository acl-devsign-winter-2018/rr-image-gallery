import { image, IMAGE_CREATE, IMAGE_DESTROY, IMAGE_LOAD, ALBUM_LOAD, album,  } from './reducers';

describe('image reducers', () => {

  it('Had a default of an empty array', () => {
    const state = image(undefined, {});
    expect(state).toEqual([]);
  });

  const imageToAdd = {
    title: 'image',
    url: 'url.com',
    album: 1,
    description: 'new image',
    id: 2
  };

  const imageToLoad = 
  {
    _id: '123',
    name: 'bob',
    __v: 0,
    id: '123',
    images: [
      {
        '_id': '456',
        'title': 'beach',
        'url': 'aURL',
        'description': '',
        'album': '123',
        '_v': 0,
        'id': '789'
      }
    ]
  };

  it('Add an image', () => {
    const state = image([], { type: IMAGE_CREATE, payload: imageToAdd });
    expect(state).toEqual([imageToAdd]);
  });

  it('Destroy an image', () => {
    const state = image([], { type: IMAGE_DESTROY, payload: 2 });
    expect(state).toEqual([]);
  });

  it('load an image', () => {
    const state = image([], { type: IMAGE_LOAD, payload: imageToLoad });
    expect(state).toEqual(imageToLoad.images);
  });

  it('loads an album', () => {
    const state = album([], { type: ALBUM_LOAD, payload: [] });
    expect(state).toEqual([]);
  });

});