import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

interface Todo {
  id: number;
  text: string;
  date: string;
  category: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddTodo addTodo={addTodo} />} />
        <Route path="/list" element={<TodoList todos={todos} deleteTodo={deleteTodo} />} />
      </Routes>
    </Router>
  );
};

export default App;
