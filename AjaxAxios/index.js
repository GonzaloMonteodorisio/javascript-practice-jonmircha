console.info('axios: ', axios);

const url = 'https://jsonplaceholder.typicode.com/user';

(() => {
  const $axios = document.getElementById('axios');

  // Crea un nuevo fragmento al cual le vamos a ir insertando los elementos creados del DOM para, finalmente, agregar el fragmento al DOM, lo que agiliza el rendimiento.
  const $fragment = document.createDocumentFragment();

  axios.get(url)
    .then(res => {
      console.info('res: ', res);
      console.info('res.data: ', res.data);
      res.data.forEach(el => {
        const $li = document.createElement('li');
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch(err => {
      console.info('Error: ', err.response);
      let message = err.response.statusText || 'Ocurrió un error';
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      console.info('Esto se ejecutará independientemente del resultado Axios');
    });
})();