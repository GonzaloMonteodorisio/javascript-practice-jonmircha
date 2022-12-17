const d = document;

// El state
const state = {
  todoList: [],
  nombre: ''
};

// Template UI
const template = () => {
  if (state.todoList.length < 1) {
    return `<p><em>Lista sin tareas por hacer.</em></p>`;
  }

  let todos = state.todoList.map(item => `<li>${item}</li>`).join('');
  return todos;
}

// Render UI
const render = () => {
  console.info('state: ', state);
  const $list = d.getElementById('todo-list');
  if (!$list) return;

  $list.innerHTML = template();
}

// Actualizar el State de forma reactiva
const setState = obj => {
  for (let key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
  }
  render();
}

// Obtenemos una copia inmutable del State
const getState = () => JSON.parse(JSON.stringify(state));

d.addEventListener('DOMContentLoaded', render);

// Estableciendo valores por defecto
setState({
  todoList: ['Tarea 1', 'Tarea 2', 'Tarea 3'],
  nombre: 'Gonzalo'
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