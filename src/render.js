function renderApp(input,filter, todoList) {
  return `<div>${input}${filter}${todoList}</div>`;
}

function renderForm() {
  return `<form class="form">
    <input type="text" data-element="addTodoInput">
    <button type="submit" data-element="addTodoButton">Add</button>
  </form>`;
}

function renderTodos(todoItems) {
  return `<ul class="todos">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
  return `<li class="${`todos__item todos__item_${todo.completed && 'checked'}`}">
    <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}"${todo.completed ? ' checked' : ''}>
    ${todo.title}
  </li>`;
}
function renderFilter(filter){
  return `<div class="form">
            <select selected="${filter}" data-element="filterDropdown" >
              <option value="showAll">select filter</option>
              <option value="showAll">Show all</option>
              <option value="completed">Completed</option>
              <option value="notCompleted">Not Completed</option>
            </select>
          </div>`;
}
function filtertData(state){
  let filterTodos=[]
      if(state.filter==='showAll'){
        filterTodos = state.todos
      }else if(state.filter==='completed'){
        filterTodos = state.todos.filter(todo => {
            return todo.completed=== true
          })  
      } else if(state.filter==='notCompleted'){
        filterTodos = state.todos.filter(todo => {
            return todo.completed=== false
          })  
      }
      return filterTodos.map(renderTodoItem).join('')
      
}

export default (element, state) => {
  //const todoItems = state.todos.map(renderTodoItem).join('');
  element.innerHTML = renderApp(
    renderForm(),
    renderFilter(state.filter),
    //renderTodos(todoItems)
    filtertData(state)
  );
}
