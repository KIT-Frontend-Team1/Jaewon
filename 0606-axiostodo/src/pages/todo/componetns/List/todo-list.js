import { useState } from 'react';
import OneTodo from './one-todo';
import { axiosInstance } from 'utils/axios';
import useApi from 'apis/apis';

const TodoList = ({ todoList, setTodoList }) => {
  const { deleteTodo } = useApi();

  return (
    <>
      {todoList.map(todo => (
        <OneTodo todo={todo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};
export default TodoList;
