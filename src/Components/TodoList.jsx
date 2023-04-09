import { useTodoContext } from "../context/TodoProvider";
import './TodoForm.css'
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useState } from "react";


const TodoList = () => {
    const { todoList, removeTodo, setUpate } = useTodoContext();
    const [editing, setEditing] = useState(false);
    const [updateItem, setUpdateItem] = useState("");
    const [id, setId] = useState("");
    
    let viewMode = {};
    let editMode = {};
    if (editing) {
    viewMode.display = 'none';
    } else {
    editMode.display = 'none';
    }
    const handleEditing = () => {
        setEditing(true);
    };

    const handlerUpdateDone = (event) => {
        console.log(updateItem, id);
        if(event.key === "Enter") {
            setUpate(updateItem, id);
            setUpdateItem("");
            setId("");
            setEditing(false)
        }
    }

    return(
        <ul>
            { todoList.length > 0 && todoList.map((todo, index) => (
                <li key={index}>
                    <div className='list' >
                        {todo}
                        <div className="edit-delete">
                            <FaEdit onClick={handleEditing}/>
                            <FaTrash  onClick={() => removeTodo(index)} />
                        </div>
                    </div>

                    <input
                    type="text"
                    placeholder={todo}
                    style={editMode}
                    onChange={(e) => setUpdateItem(e.target.value) || setId(index)}
                    onKeyDown={handlerUpdateDone} />
                
                </li>
            ))}
        </ul>
    );
};


export default TodoList;