import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  todos: [],
  addTodoState: {
    loding: false,
    done: false,
    err: null,
  },
  deleteTodoState: {
    // This is the part you need to add.
    loading: false,
    done: false,
    err: null,
  },
  upadateTodoState: {
    loading: false,
    done: false,
    err: null,
  },
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // reducers: {
  //   addTodo(state, action) {
  //     state.todos.unshift(action.payload);
  //     // [...state, action.payload]
  //   },
  //   deleteTodo(state, action) {
  //     state.todos = state.todos.filter(todo => todo.id !== action.payload);
  //   },
  //   updateTodo(state, action) {
  //     //id가 같은 값을때 content
  //     const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
  //     if (todoIndex !== -1) {
  //       // findindex는 없으면 -1을 반환하기 때문에 false대신 -1
  //       state.todos[todoIndex].content = action.payload.content;
  //       state.todos[todoIndex].state = action.payload.state;
  //       console.log(action.payload.state);
  //     }
  //   },
  // },

  extraReducers: builder => {
    //addTodo loading
    builder.addCase(addTodo.pending, state => {
      state.addTodoState.loading = true;
      state.addTodoState.done = false;
      state.addTodoState.err = null;
    });

    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.unshift(action.payload);
      state.addTodoState.loading = false;
      state.addTodoState.done = true;
      state.addTodoState.err = null;
    });

    builder.addCase(addTodo.rejected, (state, action) => {
      state.addTodoState.loading = false;
      state.addTodoState.done = false;
      state.addTodoState.err = action.error;
    });

    // deleteTodo
    builder.addCase(deleteTodo.pending, state => {
      state.deleteTodoState.loading = true;
      state.deleteTodoState.done = false;
      state.deleteTodoState.err = null;
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== Number(action.payload.id));
      state.deleteTodoState.loading = false;
      state.deleteTodoState.done = true;
      state.deleteTodoState.err = null;
    });

    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.deleteTodoState.loading = false;
      state.deleteTodoState.done = false;
      state.deleteTodoState.err = action.error;
    });

    //updateTodo
    builder.addCase(updateTodo.pending, state => {
      state.upadateTodoState.loading = true;
      state.upadateTodoState.done = false;
      state.upadateTodoState.err = null;
    });

    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === Number(action.payload.id));
      if (todoIndex !== -1) {
        // findindex는 없으면 -1을 반환하기 때문에 false대신 -1
        state.todos[todoIndex].content = action.payload.content;
        state.todos[todoIndex].state = action.payload.state;
        console.log(action.payload.state);
      }
      state.upadateTodoState.loading = false;
      state.upadateTodoState.done = true;
      state.upadateTodoState.err = null;
    });

    builder.addCase(updateTodo.rejected, (state, action) => {
      state.upadateTodoState.loading = false;
      state.upadateTodoState.done = false;
      state.upadateTodoState.err = action.error;
    });
  },
});

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async id => {
  const res = await axios.delete(`/api/todo/${id}`);
  return res.data;
});

// export const { addTodo } = todoSlice.actions;
// export const { deleteTodo } = todoSlice.actions;
// export const { updateTodo } = todoSlice.actions;
//액션 자동생성 createAction 함수를 만들지 않아도 dispatch의 action명을 함수로 사용하여 매개변수에
//액션 객체를 전달받을 수 있다.
// ex) dispatch(addTodo(newTodo))

export const addTodo = createAsyncThunk('todo/addTodo', async ({ title, content }) => {
  //msw로 만든 가상 백엔드와 데이터 통신
  // 데이터 통신 -> client -> request
  // method (get,post,delete, patch,put,)
  const res = await axios.post('/api/todo', { title, content });
  // consle.log(res)
  // res.data -> 백엔드에서 response한 값은 data키에 담긴다.
  return res.data;
});

export const updateTodo = createAsyncThunk('todo/updateTodo', async ({ id, state, content }) => {
  const res = await axios.patch(`/api/todo/${id}/update`, { content, state });
  return res.data;
});
