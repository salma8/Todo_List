import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './Todo.css';

interface Todo {
  id: number;
  text: string;
  date: string;
  category: string;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() && date && category) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo.trim(), date, category },
      ]);
      setNewTodo('');
      setDate('');
      setCategory('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Todo List
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Enter a new task"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            fullWidth
          />
          <TextField
            label="Select Date"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            label="Enter category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={addTodo}>
            Add
          </Button>
        </Box>
      </Box>

      <Box mt={4}>
        <TextField
          label="Search tasks"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Typography variant="h5" gutterBottom>
          Tasks
        </Typography>
        <List>
          {filteredTodos.map(todo => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={todo.text}
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      {todo.date}
                    </Typography>
                    {' — '}
                    <Typography component="span" variant="body2" color="text.secondary">
                      {todo.category}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Todo;
