import React, { useContext, useState } from 'react';
import TodosContext from '../context/todosContext';

const AddItemForm = () => {
  const todosLIst = { todoName: '', priority: '', disabled: false, displayError: false }
  const [todos, setTodos] = useState(todosLIst);
  const {items, itemsDispatch } = useContext(TodosContext);
  // const [priority, setPriority] = useState('');
  const handleSubmit = (e) => {
    
    
    e.preventDefault();
    
    if (todos.todoName && todos.priority) {
      const payLoad = {
        id: items.length,
        text: todos.todoName,
        priority: todos.priority,
        status: 'inprogress'
      }
      itemsDispatch({ type: 'ADD_ITEM', payLoad });
      setTodos(todosLIst);

    }else {
      setTodos(prevState => ({ ...prevState, displayError: true }))  
    }
  };

  const onInputChange = (e) => {
    const { value, name } = e.target
    value.trim().length > 0 ?
      setTodos(prevState => ({ ...prevState, [name]: value, disabled: true, displayError: false })) :
      setTodos(todosLIst)
  }

  return (
    <div>
      <p>Add item</p>
      <form onSubmit={handleSubmit}>
        <div>
        <input type="text" name="todoName" value={todos.todoName} onChange={onInputChange} />
        </div>
       
       <div>
       <input type="radio" name="priority" id="high" value="high" checked={todos.priority === "high"} onChange={onInputChange} /><label htmlFor="high">High</label>
        <input type="radio" name="priority" id="medium" value="medium" checked={todos.priority === "medium"} onChange={onInputChange} /><label htmlFor="medium">Medium</label>
        <input type="radio" name="priority" id="low" value="low" checked={todos.priority === "low"} onChange={onInputChange} /><label htmlFor="low">Low</label>
        <button disabled={!todos.disabled}>Add Item</button>
       </div>
        
        <div>
          {todos.displayError ? 'Please Enter todo Item and select the priority  ' : ''}
        </div>
        
      </form>
    </div>
  );
};

export { AddItemForm as default };
