const albumId = '5a9edf84d22df00021b2c65b';
const URL = 'https://image-gallery-server.herokuapp.com/api/';

const doFetch = (url, options = {}) => {
  return fetch(url, options)
    .then(response => {
      if(response.ok) return response.json();

      if(response.message) throw response.message;
      if(response.error) throw response.error;
      throw response;
    });
};

function loadAll() {
  return doFetch(`${URL}albums`);
}

function loadAlbum(id) {
  return doFetch(`${URL}albums/${id}`);
}

function add(image) {
  image.album = albumId;
  return doFetch(`${URL}images`, {
    method: 'POST',
    body: JSON.stringify(image),
    headers: {
      'content-type': 'application/json'
    },
  });
}

function remove(id) {
  return doFetch(`${URL}/images${id}`, {
    method: 'DELETE',
  });
}

export default {
  loadAll,
  loadAlbum,
  add,
  remove
};
