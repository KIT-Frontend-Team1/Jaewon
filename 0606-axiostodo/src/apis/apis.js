import { useTodoStore } from 'context/apicontext';
import { useEffect, useState } from 'react';
import { axiosInstance } from 'utils/axios';

const useApi = () => {
  const { todoList, setTodoList } = useTodoStore();
  // const [todoList, setTodoList] = useState([]);
  const [isAddTodoModal, setIsAddTodoModal] = useState(false);

  const getTodoListAPI = async () => {
    try {
      const res = await axiosInstance.get('/todo');
      console.log('getTodoList', res);
      setTodoList(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getTodoListAPI();
  }, []);

  const addTodoAPI = async (title, content) => {
    try {
      if (!title || !content) {
        const err = new Error();
        err.type = 'empty error';
        err.message = '빈칸을 채워주세요';
        throw err;
      }
      await axiosInstance.post('/todo', {
        title,
        content,
      });
      getTodoListAPI();
    } catch (err) {
      throw err;
    }
  };

  const updateTodoAPI = async (id, content, state) => {
    try {
      const res = await axiosInstance.put(`/todo/${id}`, { content, state });
      console.log('업데이트 결과', res);
      getTodoListAPI();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodoAPI = async id => {
    if (window.confirm('정말 삭제하시겠습니까')) {
      try {
        await axiosInstance.delete(`/todo/${id}`);
        // const _todoList = todoList.filter(todo => todo.id !== id);
        // setTodoList(_todoList);
        getTodoListAPI();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const toggleCheckAPI = async (id, state) => {
    await axiosInstance.put(`/todo/${id}`, {
      state,
    });
    getTodoListAPI();
  };

  return {
    todoList,
    setTodoList,
    isAddTodoModal,
    setIsAddTodoModal,
    getTodoListAPI,
    addTodoAPI,
    updateTodoAPI,
    deleteTodoAPI,
    toggleCheckAPI,
  };
};

export default useApi;
