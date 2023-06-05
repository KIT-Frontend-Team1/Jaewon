import { todoMock } from '__mock__/datas/todo.data';
import { rest } from 'msw';

export const getTodo = rest.get('/api/todo', async (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(todoMock));
});

export const addTodo = rest.post('/api/todo', async (req, res, ctx) => {
  let title;
  let content;

  await req.json().then(data => {
    title = data.title;
    content = data.content;
  });
  return res(
    ctx.status(200),
    ctx.json({
      id: Math.floor(Math.random() * 1000000),
      title,
      content,
      state: false,
    }),
    //client request(title,content) -> response newTodo(title,content)
  );
});

export const deleteTodo = rest.delete('/api/todo/:id', (req, res, ctx) => {
  const { id } = req.params;

  return res(
    ctx.status(200),
    ctx.json({
      id,
    }),
  );
});

export const updateTodo = rest.patch('/api/todo/:id/update', async (req, res, ctx) => {
  const { id } = req.params;
  let state;
  let content;

  await req.json().then(data => {
    content = data.content;
    state = data.state;
  });

  return res(
    ctx.status(200),
    ctx.json({
      content,
      id,
      state,
    }),
  );
});

//api 등록 -> msw생성->msw 동작
