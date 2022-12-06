const url = 'https://jsonplaceholder.typicode.com/users';

(() => {
  const $axiosAsync = document.getElementById('axios-async');

  // Crea un nuevo fragmento al cual le vamos a ir insertando los elementos creados del DOM para, finalmente, agregar el fragmento al DOM, lo que agiliza el rendimiento.
  const $fragment = document.createDocumentFragment();

  axios.get(url);

  async function getData() {
    try {
      let res = await axios.get(url);
      let data = await res.data;
      data.forEach(el => {
        const $li = document.createElement('li');
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);      
    } catch (error) {
      let message = error.response.statusText || 'Ocurrió un error';
      $axiosAsync.innerHTML = `Error ${error.response.status}: ${message}`;      
    } finally {
      console.info('Esto se ejecutará independientemente del try... catch');
    }
  }
  getData();
})();