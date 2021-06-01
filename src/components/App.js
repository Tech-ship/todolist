import React, { useEffect, useReducer } from 'react';
import TodosContext from '../context/todosContext';
import TodosReducer from '../reducers/todosReducer';
import AddItemForm from './AddItemForm';

import './App.css';
import ItemList from './todosList';
const intialState = []
function App() {
  const [items, itemsDispatch] = useReducer(TodosReducer, intialState);

  return (
    <TodosContext.Provider value={{ items, itemsDispatch }}>
      <div className="App">
        <header className="App-header">
          Rocket Labs To Do List Code Challenge Test
          <AddItemForm />
          <ItemList />
          
        </header>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
