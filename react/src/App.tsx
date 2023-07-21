import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import { todoItem } from './types/types';
import TodoList from './components/TodoList';

function App() {
  const [todoId, setTodoId] = useState<number>(1);
  const [todos, setTodos] = useState<todoItem[]>([]);
  const onAdd = (value: string) => {
    setTodos([{ id: todoId, todo: value }, ...todos]);
    setTodoId(todoId + 1);
  };
  const onRemove = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <header>
        <h1>To Do: React</h1>
      </header>
      <main>
        <TodoForm onAdd={onAdd} />
        <TodoList onRemove={onRemove} todos={todos} />
      </main>
    </>
  );
}

export default App;
