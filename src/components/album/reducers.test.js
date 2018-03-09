import { album, albums, ALBUMS_LOAD, ALBUM_ADD, ALBUM_REMOVE } from './reducers';

describe('Album Tests:', () => {

  it('albums has default empty array', () => {
    const state = albums(undefined, {});
    expect(state).toEqual([]);
  });

  it('single album has default empty object', () => {
    const state = album(undefined, {});
    expect(state).toEqual({});
  });

  const albumSample = {
    _id: '222',
    name: 'Mosses',
    __v: 0,
    id: '222',
    images: [{
      '_id': '111',
      'title': 'Mossy moss',
      'url': 'mossphoto.com',
      'description': '',
      'album': '123',
      '__v': 0,
      'id': '111'
    }]
  };

  it('loads albums', () => {
    const state = albums([], { type: ALBUMS_LOAD, payload: albumSample });
    expect(state).toEqual(albumSample);
  });
  
  it('adds an album', () => {
    const state = album([], { type: ALBUM_ADD, payload: albumSample });
    expect(state).toEqual([albumSample]);
  });
  
  it('removes an album', () => {
    const state = album([albumSample], { type: ALBUM_REMOVE, payload: albumSample.id });
    expect(state).toEqual([]);
  });
});