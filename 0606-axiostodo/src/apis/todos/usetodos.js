import useApi from 'apis/apis';
import { useTodoStore } from 'context/apicontext';
import { useEffect, useState } from 'react';
import { axiosInstance } from 'utils/axios';

const useTodos = () => {
  const { todoList, setTodoList } = useTodoStore();
  // const [todoList, setTodoList] = useState([]);
  const [isAddTodoModal, setIsAddTodoModal] = useState(false);
  const { getTodoListAPi, addTodoAPI, updateTodoAPI, deleteTodoAPI } = useApi();

  const getTodoList = async () => {
    try {
      const res = await getTodoListAPi();
      console.log('getTodoList', res);
      setTodoList(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getTodoList();
  }, []);

  const addTodo = async (title, content) => {
    await addTodoAPI(title, content);
    setIsAddTodoModal(false);
  };

  const updateTodo = async (id, content, state) => {
    await updateTodoAPI(id, content, state);
  };

  const deleteTodo = async id => {
    await deleteTodoAPI(id);
  };

  return {
    todoList,
    setTodoList,
    isAddTodoModal,
    setIsAddTodoModal,
    getTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodos;
