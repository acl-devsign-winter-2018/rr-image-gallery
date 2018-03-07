import { albums, ALBUMS_LOAD } from './reducers';

describe ('albums reducer', () => {

  it('inits to empty array', () => {
    expect(albums(undefined, {})).toEqual([]);
  });

  it('loads albums', () => {
    const albumsArray = [1, 2, 3];
    const state = albums([], { type: ALBUMS_LOAD, payload: albumsArray });
    expect(state).toEqual(albumsArray);
  });

});