import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Theme from "./components/Theme";


interface Todo {
  id: number;
  text: string;
  date: string;
  category: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ThemeProvider theme={Theme(darkMode ? 'dark' : 'light')}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Toolbar>
      </AppBar>
      <Router>
        <Routes>
          <Route path="/" element={<AddTodo addTodo={addTodo} />} />
          <Route
            path="/list"
            element={<TodoList todos={todos} deleteTodo={deleteTodo} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
