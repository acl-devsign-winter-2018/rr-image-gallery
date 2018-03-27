const URL = 'https://image-gallery-server.herokuapp.com/api';

const albumId = '5a9ef45dd22df00021b2c67d';

function load(albumId) {
  return fetch(`${URL}/albums/${albumId}`)
    .then(response => response.json());
}


function allAlbums() {
  return fetch(`${URL}/albums`)
    .then(response => response.json());
}


function add(imgObj) {
  imgObj.album = albumId;
  return fetch(`${URL}/images`, {
    method: 'POST',
    body: JSON.stringify(imgObj),
    headers: {
      'content-type': 'application/json'
    },

  }).then(response => response.json());
}


function remove(imageId) {
  return fetch(`${URL}/images${imageId}`, {
    method: 'DELETE'
  });
}

export default {
  add,
  load,
  remove,
  allAlbums

};
