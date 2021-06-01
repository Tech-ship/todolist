const TodosReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_ITEMS':
      return action.items;
    case 'ADD_ITEM':
      // console.log(state)
      // console.log(action)
      return [...state, action.payLoad];
    case 'REMOVE_ITEM':
      const deletedTodos = state.map((todo) => {
        if (todo.id === action.payLoad.id) { todo.status = "deleted" };
        return todo;
      })

      return deletedTodos.filter((item) => item.status !== 'deleted');
    case 'COMPLETE_ITEM':
      const completedTodos = state.map((todo) => {
        if (todo.id === action.payLoad.id) { todo.status = "completed" };
        return todo;
      }).filter((item) => item.status !== 'completed')
      return completedTodos;
    case 'SHOW_COMPLETED':
      return action.payLoad.filter((item) => item.status === 'completed');
    case 'SHOW_DELETED':
      return action.payLoad.filter((item) => item.status === 'deleted');
    default:
      return state;
  }
};


export default TodosReducer;
