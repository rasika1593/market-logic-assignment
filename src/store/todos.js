const uniqueId = {
  currentId: 0,
  get() {
    this.currentId += 1;
    return this.currentId;
  }
};

 const initialState = {
  todos: [
    {
      id: uniqueId.get(),
      title: 'JS-101',
      completed: true
    },
    {
      id: uniqueId.get(),
      title: 'JS-102',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-201',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-202',
      completed: false
    }
  ],
  filter:'showAll'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      let newData= [...state.todos, {
        id: uniqueId.get(),
        title: action.title,
        completed: false
      }];
      return {
        ...state,
        todos: newData,
      }

    case 'TOGGLE':
      let data= state.todos.map((todo) => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        ...state,
        todos: data,
      }
     
    case 'FILTER':
      let filterValue=action.value;
      return {
        ...state,
        filter: filterValue,
      }
      
    default: return state;
  }
}
