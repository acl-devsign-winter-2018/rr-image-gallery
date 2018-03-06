const URL = 'https://image-gallery-server.herokuapp.com/api/';
const albumId = '5a9ef45dd22df00021b2c67d';

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
  return doFetch(URL);
}
