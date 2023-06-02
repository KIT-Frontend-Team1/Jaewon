import { rest } from 'msw';
import poketmock from './poketmock.json';

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/:id/', (req, res, ctx) => {
    const id = parseInt(req.params.id) - 1; //인덱스로 변환
    return res(ctx.status(200), ctx.json(poketmock[id])); //poketmock[id]
  }),
];
