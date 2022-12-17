const d = document;

const $table = d.querySelector('.crud-table');
const $form = d.querySelector('.crud-form');
const $title = d.querySelector('.crud-title');
const $templateContent = d.querySelector('#crud-template').content;
const $fragment = d.createDocumentFragment();

const getAll = async() => {
  try {
    let response = await fetch('http://localhost:3000/santos');
    console.info('response', response);
    if (!response.ok) throw {
      status: response.status,
      statusText: response.statusText || 'Ocurrió un error al solicitar los datos'
    };
    let data = await response.json();
    console.info('data: ', data);

    data.forEach(el => {
      $templateContent.querySelector('.name').textContent = el.nombre;
      $templateContent.querySelector('.constellation').textContent = el.constelacion;

      $templateContent.querySelector('.edit').dataset.id = el.id;         
      $templateContent.querySelector('.edit').dataset.name = el.nombre;         
      $templateContent.querySelector('.edit').dataset.constellation = el.constelacion;   

      $templateContent.querySelector('.delete').dataset.id = el.id;    

      let $clone = d.importNode($templateContent, true);
      $fragment.appendChild($clone);
    });

    $table.querySelector('tbody').appendChild($fragment);

  } catch (error) {
    let message = error.statusText || 'Ocurrió un error';
    $table.insertAdjacentHTML('afterend', `<p><b>Error: ${error.status}: ${message}</b></p>`);
  }
}

d.addEventListener('DOMContentLoaded', getAll);

d.addEventListener('submit', async e => {
  e.preventDefault();

  if (!e.target.id.value) {
    //Create - POST
    try {
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        })
      }
      let response = await fetch('http://localhost:3000/santos', options);
      // let data = await response.json();
      
      if (!response.ok) throw {
        status: response.status,
        statusText: response.statusText || 'Ocurrió un error al solicitar los datos'
      };

      location.reload();
    } catch (error) {
        let message = error.statusText || 'Ocurrió un error';
        $form.insertAdjacentHTML('afterend', `<p><b>Error: ${error.status}: ${message}</b></p>`);     
    }
  } else {
    //Update - PUT
    try {
      let options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        })
      }
      let response = await fetch(`http://localhost:3000/santos/${e.target.id.value}`, options);
      // let data = await response.json();
      
      if (!response.ok) throw {
        status: response.status,
        statusText: response.statusText || 'Ocurrió un error al solicitar los datos'
      };

      location.reload();
    } catch (error) {
        let message = error.statusText || 'Ocurrió un error';
        $form.insertAdjacentHTML('afterend', `<p><b>Error: ${error.status}: ${message}</b></p>`);     
    }
  }
});

d.addEventListener('click', async e => {
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
      try {
        let options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        }
        let response = await fetch(`http://localhost:3000/santos/${e.target.dataset.id}`, options);
        // let data = await response.json();
        
        if (!response.ok) throw {
          status: response.status,
          statusText: response.statusText || 'Ocurrió un error al solicitar los datos'
        };
  
        location.reload();
      } catch (error) {
          let message = error.statusText || 'Ocurrió un error';
          alert(`Error: ${error.status}: ${message}`);     
      }
    }
  }
});