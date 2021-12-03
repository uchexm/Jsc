const todoList = [{ name: 'eat', dueDate: '2023-08-19'},{name: 'wash', dueDate: '2023-08-22'}];
renderList();


function renderList(){
let todoListHtml = '';
for (let i = 0; i < todoList.length; i++){
  const todoObj = todoList[i];
  // const name = todoObj.name;
  // const dueDate = todoObj.dueDate;
  const {name, dueDate} = todoObj
  const html = `<div>${name} </div> 
  <div>${dueDate} </div>
  <button onclick="todoList.splice(${i}, 1); renderList();" class="delete-todo">Delete</button>`
  todoListHtml += html;
}
//console.log(todoListHtml);

document.querySelector('.js-todo-list').innerHTML = todoListHtml;

};


function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInput = document.querySelector('.js-date');
  const dueDate = dateInput.value;
  todoList.push({name: name, dueDate: dueDate});

  inputElement.value = '';

  renderList();
}
