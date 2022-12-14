const d = document;

const $table = d.querySelector('.crud-table');
const $form = d.querySelector('.crud-form');
const $title = d.querySelector('.crud-title');
const $templateContent = d.querySelector('#crud-template').content;
const $fragment = d.createDocumentFragment();

const ajax = (options) => {
  let {url, method, success, error, data} = options;

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', e => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 & xhr.status < 300) {
      let data = JSON.parse(xhr.responseText);
      success(data);
    } else {
      let message = xhr.statusText || 'Ocurrió un error';
      error(`Error: ${xhr.status}: ${message}`);
    }
  });

  xhr.open(method || 'GET', url);

  xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

  xhr.send(JSON.stringify(data));
};

const getAll = () => {
  ajax(
    {
      url: 'http://localhost:3000/santos',
      success: (res) => {
        console.info('res: ', res);
        res.forEach(el => {
          $templateContent.querySelector('.name').textContent = el.nombre;         
          $templateContent.querySelector('.constellation').textContent = el.constelacion;         
          $templateContent.querySelector('.edit').dataset.id = el.id;         
          $templateContent.querySelector('.edit').dataset.name = el.nombre;         
          $templateContent.querySelector('.edit').dataset.constellation = el.constelacion;   

          $templateContent.querySelector('.delete').dataset.id = el.id;         

          let $clone = d.importNode($templateContent, true);
          $fragment.appendChild($clone);

          $table.querySelector('tbody').appendChild($fragment);
        });
      },
      error: (err) => {
        console.info('err: ', err);
        $table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`);
      }
    }
  );
};

d.addEventListener('DOMContentLoaded', getAll);

d.addEventListener('submit', e => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      //POST (create)
      ajax({
        url: 'http://localhost:3000/santos',
        method: 'POST',
        success: (res) => location.reload(),
        error: (err) => $form.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value
        }
      });
    } else {
      //PUT (update)
      ajax({
        url: `http://localhost:3000/santos/${e.target.id.value}`,
        method: 'PUT',
        // no hace falta pasarle res de parámetro, en este caso, ya que no se usa.
        success: res => location.reload(),
        error: err => $form.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value
        }
      });
    }
  }
});

d.addEventListener('click', e => {
  if (e.target.matches('.edit')) {
    $title.textContent = 'Editar Santo';
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches('.delete')) {
    let isDelete = confirm(`¿Estás seguro de eliminar el elemento con id: ${e.target.dataset.id}?`);

    if (isDelete) {
      //DELETE (delete)
      ajax({
        url: `http://localhost:3000/santos/${e.target.dataset.id}`,
        method: 'DELETE',
        // no hace falta pasarle res de parámetro, en este caso, ya que no se usa.
        success: res => location.reload(),
        error: err => alert(err)
      });
    }
  }
});