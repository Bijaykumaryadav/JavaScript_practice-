import { createSlice } from "@reduxjs/toolkit";
// Load todos from localStorage or fallback to an empty array
const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo, setTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
