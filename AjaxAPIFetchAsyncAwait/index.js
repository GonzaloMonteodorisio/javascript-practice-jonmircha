const url = 'https://jsonplaceholder.typicode.com/user';

(() => {
  const $fetchAsync = document.getElementById('fetch-async');

  // Crea un nuevo fragmento al cual le vamos a ir insertando los elementos creados del DOM para, finalmente, agregar el fragmento al DOM, lo que agiliza el rendimiento.
  const $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      // Petición 'GET' con el método fetch
      let response = await fetch(url);

      // Manejo de errores
      // if (!response.ok) throw new Error('Ocurrió un error al solicitar los datos');

      // Alternativa para poder mandar un objeto error en vez de sólo un texto
      if (!response.ok) throw {
        status: response.status,
        statusText: response.statusText || 'Ocurrió un error al solicitar los datos'
      };

      let data = await response.json();

      console.info('response', response);
      console.info('data', data);


      data.forEach(el => {
        const $li = document.createElement('li');
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch(error) {
        console.info('Estoy en el catch: ', error);
        let message = error.statusText || 'Ocurrió un error';
        $fetchAsync.innerHTML = `Error ${error.status}: ${message}`;
    } finally {
      console.info('Estoy en el finally');
    };


  };

  getData();



    // .then(res => {
    //   console.info('res: ', res);
    //   return res.ok ? res.json() : Promise.reject(res);
    // })
    // .then(data => {
    //   console.info('data: ', data);


    //   $fetch.appendChild($fragment);
    // })
    // .catch(err => {
    //   console.info(err)
    //   let message = err.statusText || 'Ocurrió un error';
    //   $fetch.innerHTML = `Error ${err.status}: ${message}`;
    // })
    // .finally('Esto se ejecutará independientemente del resultado de la promesa Fetch')
})();