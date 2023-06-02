import { rest } from 'msw';
import people from './dummy.json';

export const handlers = [
  rest.get('/people', (req, res, ctx) => {
    return res(ctx.status(404), ctx.json(people));
  }),
];
