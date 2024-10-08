// src/redux/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
  input: '',
  updatedIndex: null,
  show: false,
  search: '',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setInput(state, action) {
      state.input = action.payload;
    },
    addTodo(state) {
      state.todos.push(state.input);
      state.input = '';
      state.show = false;
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteAllTodos(state) {
      state.todos = [];
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    editTodo(state, action) {
      state.input = state.todos[action.payload];
      state.updatedIndex = action.payload;
      state.show = true;
    },
    updateTodo(state) {
      state.todos[state.updatedIndex] = state.input;
      state.input = '';
      state.show = false;
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const {
  setInput,
  addTodo,
  deleteAllTodos,
  deleteTodo,
  editTodo,
  updateTodo,
  setSearch,
} = todosSlice.actions;

export default todosSlice.reducer;
