import './App.css';
import TodoProvider from './context/TodoProvider';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <div className="App">
      <header className="md:container md:mx-auto">
        Todo List
      </header>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;