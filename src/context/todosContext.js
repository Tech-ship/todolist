import React from 'react';

const TodosContext = React.createContext({
  items: [],
  itemsDispatch: () => {},
});

export default TodosContext;
