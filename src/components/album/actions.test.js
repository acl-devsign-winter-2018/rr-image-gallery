import { doLoadAlbum, addAlbum } from './actions';
import { ALBUM_ADD, ALBUM_LOAD } from './reducers';

it.skip('loads album', () => {
  const { type, payload } = doLoadAlbum({
    load() {return 'fake result'; }
  })();

  expect(type).toBe(ALBUM_LOAD);
  expect(payload).toEqual('fake result');
});

it.skip('fires an add action', () => {
  const { type, payload } = addAlbum({ name: 'Mosses' });
  expect(type).toBe(ALBUM_ADD);
  const { name, id } = payload;
  expect(name).toBe('Mosses');
  expect(id).toBeTruthy();
});
