//.env(환경변수)
//환경변수는 언제 사용해야할까?
//시스템 환경을 변수에 담아서 사용
//dotenv, 기본값
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from 'reducer';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development', //조건식 활용해서 boolean
  middleware: getDefaultMiddleware => {
    if (process.env.NODE_ENV === 'development') {
      return [...getDefaultMiddleware(), logger];
      //getDefaultMiddleware를 받지 않으면 기본 설치되어 있는 미들웨어를 전부 무시하고 덮어 씌웁니다.
      //현재상태에서 getDefaultMiddleware가 없다면 logger만 적용, rtk에서 지원하는 기본 미들웨어를 전부삭제
    }
    return getDefaultMiddleware();
  },
});
