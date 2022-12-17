const template = () => {
  if (template.data.todoList.length < 1) {
    return `<p><em>Lista sin tareas por hacer.</em></p>`;
  }

  let todos = template.data.todoList.map(item => `<li>${item}</li>`).join('');
  return todos;
}

template.data = {
  todoList: []
}

console.info('template.data: ', template.data);
console.info('template(): ', template());