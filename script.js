const listaTarefas = 'lista-tarefas';
const selected = 'selected';
const completed = 'completed';

function removeClassSelected() {
  const listItems = document.getElementById(listaTarefas).children;
  for (let i = 0; i < listItems.length; i += 1) {
    if (listItems[i].className !== completed) {
      listItems[i].classList.remove(selected);
    }
  }
}

function clickListener(li) {
  if (li.classList.contains(selected)) {
    li.classList.remove(selected);
  } else {
    removeClassSelected();
    li.classList.add(selected);
  }
}

function doubleClickListener(li) {
  if (li.classList.contains(completed)) {
    li.classList.remove(completed);
  } else {
    li.classList.add(completed);
  }
}

function createListItem(text) {
  const li = document.createElement('li');
  li.innerText = text;
  li.addEventListener('click', () => clickListener(li));
  li.addEventListener('dblclick', () => doubleClickListener(li));
  return li;
}

function insertTask() {
  const list = document.getElementById(listaTarefas);
  const text = document.getElementById('texto-tarefa').value;
  const li = createListItem(text);
  list.appendChild(li);
  document.getElementById('texto-tarefa').value = '';
}

const createTaskBtn = document.getElementById('criar-tarefa');
createTaskBtn.addEventListener('click', () => insertTask());

const removeTasks = document.getElementById('apaga-tudo');
removeTasks.addEventListener('click', () => {
  const list = document.getElementById(listaTarefas);
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});
