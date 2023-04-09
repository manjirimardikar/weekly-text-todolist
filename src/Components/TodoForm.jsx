import { useState } from "react";
import { useTodoContext } from "../context/TodoProvider";
import './TodoList.css'
import { FaPlusCircle } from 'react-icons/fa';


const TodoForm = () => {
    
  const { addNewTodoItem } = useTodoContext();  // calling the context use Custom Handler

  const [addTodoItem, setTodoItem] = useState("");

  const formSubmitHandler = e => {
    e.preventDefault();
    if(!addTodoItem) return; 
    addNewTodoItem(addTodoItem);
    setTodoItem("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        value={addTodoItem}
        type="text"
        placeholder="Add todo..."
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button type="submit"><FaPlusCircle  className="plus"/></button>      
    </form>
  );
};


export default TodoForm;