import React from "react";
import Button from "@mui/material/Button";
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

export const TodoItem = () => {
  const dispatch = useDispatch();
  const { todos, input, show, search } = useSelector((state) => state.todos);
  return (
    <>
      <input
        className="inpu"
        type="text"
        value={input}
        onChange={(e) => dispatch(setInput(e.target.value))}
        placeholder="Enter a todo"
      />

      {show ? (
        <Button
          className="but2"
          variant="contained"
          style={{ backgroundColor: "#FFD700", color: "#FFFFFF" }}
          onClick={() => dispatch(updateTodo())}
        >
          Update
        </Button>
      ) : (
        <Button
          className="but"
          variant="contained"
          color="success"
          onClick={() => dispatch(addTodo())}
        >
          ADD
        </Button>
      )}

      <div>
        {/* Search input */}
        <input
          type="text"
          value={search}
          className="inpu"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          placeholder="Search todos"
        />
      </div>
    </>
  );
};
