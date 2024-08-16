import React, { useState } from 'react';
import './TodoList.css';
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Todo {
  id: number;
  text: string;
  date: string;
  category: string;
}

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="sm">
      <Box mb={50} display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography variant="h2" gutterBottom>
          Tasks
        </Typography>
        <TextField
          label="Search Tasks"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        {filteredTodos.length > 0 ? (
          filteredTodos.map(todo => (
            <Card key={todo.id} sx={{ width: '100%', maxWidth: 500 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {todo.text}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {todo.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {todo.category}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary">
            No tasks found.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default TodoList;
