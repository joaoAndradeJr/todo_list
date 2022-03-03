function createListItem(text) {
  const li = document.createElement('li');
  li.innerText = text;
  return li;
}

function insertTask() {
  const list = document.getElementById('lista-tarefas');
  const text = document.getElementById('texto-tarefa').value;
  const li = createListItem(text);
  list.appendChild(li);
  document.getElementById('texto-tarefa').value = '';
}

const createTaskBtn = document.getElementById('criar-tarefa');
createTaskBtn.addEventListener('click', () => insertTask());
