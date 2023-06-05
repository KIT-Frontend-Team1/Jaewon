import { setupWorker } from 'msw';
import * as TodoApi from './apis/todo.api';

const handler = [...Object.values(TodoApi)];
//export한 함수들이 객체형태로 * = TodoApi에 담겨전달 해당 객체의 키의 벨류인 함수들을 배열로 생성
export const worker = setupWorker(...handler);
