function removeSelected() {
  const listItems = document.getElementById('lista-tarefas').children;
  for (let i = 0; i < listItems.length; i += 1) {
    if (listItems[i].className) {
      listItems[i].removeAttribute('class');
    }
  }
}

function createListItem(text) {
  const li = document.createElement('li');
  li.innerText = text;
  li.addEventListener('click', () => {
    if (li.className === 'selected') {
      li.removeAttribute('class');
    } else {
      removeSelected();
      li.className = 'selected';
    }
  });
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
