import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setInput,
  addTodo,
  deleteAllTodos,
  deleteTodo,
  editTodo,
  updateTodo,
  setSearch,
} from "../redux/todosSlice";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

import EditIcon from "@mui/icons-material/Edit";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

export const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, input, show, search } = useSelector((state) => state.todos);

  // Filter todos based on the search
  const filteredTodos = todos.filter((todo) =>
    todo.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <List>
        <ul>
          {filteredTodos.map((todo, i) => (
            <ListItem key={i}>
              
              <ListItemText primary={todo} />
              <span>
                <IconButton
                  onClick={() => dispatch(deleteTodo(i))}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </span>
              <span>
                <IconButton
                  onClick={() => dispatch(editTodo(i))}
                  aria-label="edit"
                >
                  <EditIcon />
                </IconButton>
                <Box sx={{ "& > :not(style)": { m: 1 } }}></Box>
              </span>
            </ListItem>
          ))}
        </ul>
      </List>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",  
          marginTop: 4,  
        }}
      >
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(deleteAllTodos())}
        >
          Delete ALL
        </Button>
      </Box>
      
    </div>
  );
};
