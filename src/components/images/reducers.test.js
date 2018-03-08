import { image, album, ALBUM_LOAD, IMAGE_LOAD, IMAGE_ADD, IMAGE_DELETE } from './reducers';

describe('image reducers', () => {
 
  it('has empty array as default', () => {
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
        '__v': 0,
        'id': '789'
      }
    ]
  };

  it('Adds image', () => {
    const state = image([], { type: IMAGE_ADD, payload: imageToAdd });
    expect(state).toEqual([imageToAdd]);
  });

  it('Deletes image', () => {
    const state = image([imageToAdd], { type: IMAGE_DELETE, payload: 2 });
    expect(state).toEqual([]);
  });

  it('loads image', () => {
    const state = image([], { type: IMAGE_LOAD, payload: imageToLoad });
    expect(state).toEqual(imageToLoad.images);
  });

  it('loads albums', () => {
    const state = album([], { type: ALBUM_LOAD, payload: [] });
    expect(state).toEqual([]);
  });
});