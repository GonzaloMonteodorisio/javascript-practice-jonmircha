const url = 'https://jsonplaceholder.typicode.com/users';

(() => {
  const $fetch = document.getElementById('fetch');

  // Crea un nuevo fragmento al cual le vamos a ir insertando los elementos creados del DOM para, finalmente, agregar el fragmento al DOM, lo que agiliza el rendimiento.
  const $fragment = document.createDocumentFragment();

  // Petición 'GET' con el método fetch
  fetch(url)
    .then(res => {
      console.info('res: ', res);
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then(data => {
      console.info('data: ', data);

      data.forEach(el => {
        const $li = document.createElement('li');
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch(err => {
      console.info(err)
      let message = err.statusText || 'Ocurrió un error';
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally('Esto se ejecutará independientemente del resultado de la promesa Fetch')
})();