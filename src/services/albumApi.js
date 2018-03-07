const URL = 'https://image-gallery-server.herokuapp.com/api';
const albumId = '5a9edd23d22df00021b2c654';

const doFetch = (url, options = {}) => {
  return fetch(url, options)
    .then(response => {
      if(response.ok) return response.json();
      
      if(response.message) throw response.message;
      if(response.error) throw response.error;
      throw response;
    });
};

function loadAlbums() {
  return doFetch(`${URL}/albums`);
}

function load() {
  return doFetch(`${URL}/albums/${albumId}`);
}

function add(image) {
  return doFetch(`${URL}/images`, {
    method: 'POST',
    body: JSON.stringify(image),
    headers: {
      'content-type': 'application/json'
    },
  });
}

// function update(album) {
//   return doFetch(`${URL}/albums/${album.id}`, {
//     method: 'PUT',
//     body: JSON.stringify(album),
//     headers: {
//       'content-type': 'application/json'
//     },
//   });
// }

function remove(id) {
  return doFetch(`${URL}/images/${id}`, {
    method: 'DELETE',
  });
}

export default {
  loadAlbums,
  load,
  add,
  remove
};