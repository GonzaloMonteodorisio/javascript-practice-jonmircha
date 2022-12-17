const d = document;

// El state Global
const state = {
  todoList: [],
  nombre: ''
};

// Template UI
const template = () => {
  if (template.data.todoList.length < 1) {
    return `<p><em>Lista sin tareas por hacer.</em></p>`;
  }

  let todos = template.data.todoList.map(item => `<li>${item}</li>`).join('');
  return todos;
}

// Agregar State al template que genera el Componente de UI (State Local)
template.data = {
  todoList: []
}

// Render UI
const render = () => {
  console.info('template: ', template);
  console.info('Local state: ', template.data);
  console.info('Global state: ', state);
  const $list = d.getElementById('todo-list');
  if (!$list) return;

  $list.innerHTML = template();
}

// Actualizar el State de forma reactiva
const setState = obj => {
  for (let key in obj) {
    if (template.data.hasOwnProperty(key)) {
      template.data[key] = obj[key];
    }
  }
  render();
}

// Obtenemos una copia inmutable del State
const getState = () => JSON.parse(JSON.stringify(template.data));

d.addEventListener('DOMContentLoaded', render);

// Estableciendo valores por defecto
setState({
  todoList: ['Tarea 1', 'Tarea 2', 'Tarea 3']
});

d.addEventListener('submit', e => {
  if (!e.target.matches('#todo-form')) return false;

  e.preventDefault();

  const $item = d.getElementById('todo-item');
  if (!$item) return;

  // Actualizar el State de forma reactiva
  const lastState = getState();
  lastState.todoList.push($item.value);
  setState({
    todoList: lastState.todoList
  });

  // Limpiar el input
  $item.value = '';
  $item.focus();
});