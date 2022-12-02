const url = 'https://jsonplaceholder.typicode.com/users';

(() => {
  // Instancia de la petición
  const xhr = new XMLHttpRequest();
  console.info(xhr);

  const $xhr = document.getElementById('xhr');

  // Crea un nuevo fragmento al cual le vamos a ir insertando los elementos creados del DOM para, finalmente, agregar el fragmento al DOM, lo que agiliza el rendimiento.
  const $fragment = document.createDocumentFragment();

  // Manejo de los eventos
  // "readystatechange" se lanza cuando detecta cualquier cambio de estado."
  xhr.addEventListener('readystatechange', e => {
    if (xhr.readyState !== 4) return;

    console.info(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      console.info(xhr.status);
      console.info('éxito');
      let json = JSON.parse(xhr.responseText);
      console.info(json);

      json.forEach(el => {
        const $li = document.createElement('li');
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);

    } else {
      console.info('error');
      let message = xhr.statusText || 'Ocurrió un error';
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  // Apertura
  xhr.open('GET', url);

  // Envío
  xhr.send();

})();