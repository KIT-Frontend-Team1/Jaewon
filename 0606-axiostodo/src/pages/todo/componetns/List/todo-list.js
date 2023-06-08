import { useState } from 'react';
import OneTodo from './one-todo';
import { axiosInstance } from 'utils/axios';
import useApi from 'apis/apis';
import { useTodoStore } from 'context/apicontext';

const TodoList = () => {
  const { todoList } = useTodoStore();

  return (
    <>
      {todoList.map(todo => (
        <OneTodo todo={todo} />
      ))}
    </>
  );
};
export default TodoList;
