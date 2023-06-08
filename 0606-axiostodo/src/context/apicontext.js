import { createContext, useContext, useState } from 'react';

export const TodoContext = createContext();
export const useTodoStore = () => useContext(TodoContext);

export const TodoStoreProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  return <TodoContext.Provider value={{ todoList, setTodoList }}>{children}</TodoContext.Provider>;
};
