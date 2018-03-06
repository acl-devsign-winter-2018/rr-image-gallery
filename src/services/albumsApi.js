const URL = 'https://image-gallery-server.herokuapp.com/api';
const id = '5a9ee071d22df00021b2c65c';

const doFetch = (url, options = {}) => {
  return fetch(url, options)
    .then(response => {
      if(response.ok) return response.json();

      return response.json().then(body => {
        if(body.message) throw body.message;
        if(body.error) throw body.error;
        throw body;
      });
    });
};

function load() {
  return doFetch(`${URL}/albums/${id}`);
}

function add(album) {
  return doFetch(URL, {
    method: 'POST',
    body: JSON.stringify(album),
    headers: {
      'content-type': 'application/json'
    }
  });
}

function remove(id) {
  return doFetch(`${URL}/images/${id}`, {
    method: 'DELETE'
  });
}

function addImage(album) {
  return doFetch(`${URL}/images/`, {
    method: 'POST',
    body: JSON.stringify(album),
    headers: {
      'content-type': 'application/json'
    }
  });
}

function removeImage(id) {
  return doFetch(`${URL}/images/${id}`, {
    method: 'DELETE'
  });
}

export default {
  load,
  add,
  remove,
  addImage,
  removeImage
};