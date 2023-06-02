import { useSelector } from 'react-redux';
import OneTodo from './one-todo';

const TodoList = () => {
  const todoList = useSelector(state => state.todo.todos);

  return (
    <>
      {todoList.map((todo, index) => (
        <OneTodo key={index} todo={todo} />
      ))}
    </>
  );
};
export default TodoList;
