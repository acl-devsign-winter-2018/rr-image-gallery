import { album, ALBUM_LOAD, ALBUM_ADD, ALBUM_REMOVE } from './reducers';

it('has default empty object', () => {
  const state = album(undefined, {});
  expect(state).toEqual([]);
});

it('loads album from api', () => {
  const albumSamples = [
    { name: 'Mosses', id: 111 },
    { name: 'Lichens', id: 222 },
  ];  
  const state = album([], { type: ALBUM_LOAD, payload: albumSamples });
  expect(state).toEqual(albumSamples);
});

const albumSample = { name: 'Mosses', id: 111 };

it('adds an album', () => {
  const state = album([], { type: ALBUM_ADD, payload: albumSample });
  expect(state).toEqual([albumSample]);
});

it('removes an album', () => {
  const state = album([albumSample], { type: ALBUM_REMOVE, payload: 111 });
  expect(state).toEqual([]);
});