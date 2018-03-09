import { imagesByAlbum, ALBUM_LOAD, IMAGE_LOAD, IMAGE_ADD, IMAGE_REMOVE } from './reducers';
import { album } from '../album/reducers';

describe('Images Tests: ', () => {

  it('has default empty array', () => {
    const state = imagesByAlbum(undefined, {});
    expect(state).toEqual([]);
  });
  
  it('registers when an album is loaded', () => {
    const state = album([], { type: ALBUM_LOAD, payload: [] });
    expect(state).toEqual([]);
  
  });
  
  const albumSample = {
    _id: '222',
    name: 'Mosses',
    __v: 0,
    id: '222',
    images: [
      {
        '_id': '111',
        'title': 'Mossy moss',
        'url': 'mossphoto.com',
        'description': '',
        'album': '123',
        '__v': 0,
        'id': '111'
      }
    ]
  };
  
  const imageSample = { 
    title: 'Mosses', 
    url: 'http://mossphoto',
    album: 123,
    description: 'this is a photo',
    id: 777 
  };  
  
  it('loads images', () => {
    const state = imagesByAlbum([], { type: IMAGE_LOAD, payload: albumSample });
    expect(state).toEqual(albumSample.images);
  });
  
  it('adds an image', () => {
    const state = imagesByAlbum([], { type: IMAGE_ADD, payload: imageSample });
    expect(state).toEqual([imageSample]);
  });
  
  it('removes an image', () => {
    const state = imagesByAlbum([imageSample], { type: IMAGE_REMOVE, payload: 777 });
    expect(state).toEqual([]);
  });
});