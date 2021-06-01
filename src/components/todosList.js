import React, { useContext } from 'react';
import TodosContext from '../context/todosContext';


export default function ItemList() {
  const { items, itemsDispatch } = useContext(TodosContext);
  

  return (
    <div className="items-container">
     <div className="sortButtons">
            <button type="button" style={{flex:1}}  onClick={() => itemsDispatch({ type: 'SHOW_ALL', payLoad: items})}>All Todos</button>
            <button type="button" style={{flex:1}} onClick={() => itemsDispatch({ type: 'SHOW_INPROGRESS', payLoad: items})}>In-progress</button>
            <button type="button" style={{flex:1}} onClick={() => itemsDispatch({ type: 'SHOW_COMPLETED', payLoad: items})}>Completed</button>
            <button type="button" style={{flex:1}} onClick={() => itemsDispatch({ type: 'SHOW_DELETED', payLoad: items})}>Deleted</button>
            
        </div>
        {items.map((item, key) => (
          <div key={key}>
            <input type="checkbox" name={item.text}/>
           <span >{item.text}</span>
           <button 
             onClick={() => itemsDispatch({ type: 'COMPLETE_ITEM', payLoad: item})
             }
           >
             Complete
           </button>
           <button 
             onClick={() => itemsDispatch({ type: 'REMOVE_ITEM', payLoad: item})
             }
           >
             X
           </button>
          </div>
        ))}
     
    </div>
  );
};

