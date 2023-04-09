const { useContext, createContext, useState } = require("react");

const TodoContext = createContext();
const initialTodoList = ["Learn React Context"]

const TodoProvider = ({ children }) => {
 
    // setting the default state for the TodoList in Context state
    const [todoList, setTodoList] = useState(initialTodoList);

    const addNewTodoItem = (newItem) => {
        setTodoList((prevState) => {
            const updatedList = [...prevState];
            updatedList.unshift(newItem);
            return updatedList;
        })
    }

    const setUpate = (updatedItem, id) => {
        // console.log("Inside the Todo Provider", updatedItem, " ID :: ", id);
        setTodoList(
            todoList.map((todo, index) => {
                if(index === id) {
                    todo = updatedItem;
                }
                return todo;
            })
        )
    }

    const removeTodo = item => {
        const updatedList = todoList.filter((_, index) => index !== item);
        setTodoList(updatedList);
    }

    const contextValue = {
        todoList,
        addNewTodoItem,
        removeTodo,
        setUpate
    };


    return <TodoContext.Provider value={contextValue}>{ children }</TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext)

export default TodoProvider;