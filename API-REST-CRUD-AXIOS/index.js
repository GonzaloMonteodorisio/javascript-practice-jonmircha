const d = document;

const $table = d.querySelector('.crud-table');
const $form = d.querySelector('.crud-form');
const $title = d.querySelector('.crud-title');
const $templateContent = d.querySelector('#crud-template').content;

const getAll = async () => {
  try {
    let response = await axios.get('http://localhost:3000/santo');
    let data = await response.data;
  } catch (error) {
    console.info('error: ', error);
    let message = error.statusText || 'Ocurrió un error';
    $table.insertAdjacentHTML('afterend', `<p><b>Error ${error.response.status}: ${message}</b></p>`)
  }
}

d.addEventListener('DOMContentLoaded', getAll);
