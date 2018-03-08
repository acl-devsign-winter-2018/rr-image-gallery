import { albums, ALBUMS_LOAD, ALBUM_LOAD } from './reducers';

it.skip('Has default empty array', () => {
  const state = albums(undefined, {});
  expect(state).toEqual([]);
});

const albumsToLoad = [
  {
    id: 111,
    name: 'Michael\'s Album',
    images: []
  },
  {
    id: 222,
    name: 'Album',
    images: []
  },
];

const albumToLoad = {
  id: 111,
  name: 'Michael\'s Album',
  images: []
};

it('Loads all albums from API', () => {
  const state = albums([], { type: ALBUMS_LOAD,       payload: albumToLoad });
  expect(state).toEqual(albumToLoad);
});

it('Loads single album from API', () => {
  const state = albums([], { type: ALBUM_LOAD,
    payload: albumToLoad });
  expect(state).toEqual(albumToLoad);
});