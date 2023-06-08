import { useTodoStore } from 'context/apicontext';
import { useEffect, useState } from 'react';
import { axiosInstance } from 'utils/axios';

const useTodos = () => {
  const { todoList, setTodoList } = useTodoStore();
  // const [todoList, setTodoList] = useState([]);
  const [isAddTodoModal, setIsAddTodoModal] = useState(false);

  const getTodoList = async () => {
    try {
      const res = await axiosInstance.get('/todo');
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
      getTodoList();
      setIsAddTodoModal(false);
    } catch (err) {
      throw err;
    }
  };

  const updateTodo = async (id, content, state) => {
    try {
      const res = await axiosInstance.put(`/todo/${id}`, { content, state });
      console.log('업데이트 결과', res);
      getTodoList();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async id => {
    if (window.confirm('정말 삭제하시겠습니까')) {
      try {
        await axiosInstance.delete(`/todo/${id}`);
        // const _todoList = todoList.filter(todo => todo.id !== id);
        // setTodoList(_todoList);
        getTodoList();
      } catch (err) {
        console.error(err);
      }
    }
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
