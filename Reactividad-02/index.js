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

d.addEventListener('DOMContentLoaded', render);

// Estableciendo valores por defecto
setState({
  todoList: ['Tarea 1', 'Tarea 2', 'Tarea 3'],
  nombre: 'Gonzalo'
});

d.addEventListener('submit', e => {
  if (!e.target.matches('#todo-form')) return false;

  e.preventDefault();

  // Actualizar el State y, por ende, la UI
  const $item = d.getElementById('todo-item');
  if (!$item) return;

  // El estado es mutable porque permite modificar el estado directamente creando una copia del objeto y agregando otro elemento
  state.todoList.push($item.value);

  render();

  // Limpiar el input
  $item.value = '';
  $item.focus();
});