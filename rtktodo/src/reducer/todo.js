import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  addTodoState: {
    loding: false,
    done: false,
    err: null,
  },
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.unshift(action.payload);
      // [...state, action.payload]
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo(state, action) {
      //id가 같은 값을때 content
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (todoIndex !== -1) {
        // findindex는 없으면 -1을 반환하기 때문에 false대신 -1
        state.todos[todoIndex].content = action.payload.content;
        state.todos[todoIndex].state = action.payload.state;
        console.log(action.payload.state);
      }
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const { deleteTodo } = todoSlice.actions;
export const { updateTodo } = todoSlice.actions;
//액션 자동생성 createAction 함수를 만들지 않아도 dispatch의 action명을 함수로 사용하여 매개변수에
//액션 객체를 전달받을 수 있다.
// ex) dispatch(addTodo(newTodo))
/*  ex)  export const createAction = ()=>{
	return (payload)=>{
		return {type,payload}
}
}
*/
