import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Todo.css';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';

interface Todo {
  id: number;
  text: string;
  date: string;
  category: string;
}

interface AddTodoProps {
  addTodo: (todo: Todo) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const navigate = useNavigate();

  const handleAddTodo = () => {
    if (newTodo.trim() && date && category) {
      addTodo({
        id: Date.now(),
        text: newTodo.trim(),
        date,
        category,
      });
      setNewTodo('');
      setDate('');
      setCategory('');
      navigate('/list');  // Redirect to the list page after adding
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Add Todo
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
          <Button variant="contained" color="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddTodo;
