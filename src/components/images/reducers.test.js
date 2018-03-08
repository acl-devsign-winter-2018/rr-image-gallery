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
    _id: '5a9ec831d22df00021b2c649',
    name: 'heiner',
    __v: 0,
    id: '5a9ec831d22df00021b2c649',
    images: [
      {
        '_id': '5a9f84a7874c250021322c2c',
        'title': 'beach',
        'url': 'http://www.hawaiigaga.com/Images/attractions/puu-poa-beach-s1.jpg',
        'description': '',
        'album': '5a9ec831d22df00021b2c649',
        '__v': 0,
        'id': '5a9f84a7874c250021322c2c'
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