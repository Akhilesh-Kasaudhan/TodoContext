import React from "react";
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "Todo msg", completed: false }],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
