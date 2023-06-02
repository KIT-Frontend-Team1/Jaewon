import { worker } from './mocks/browser';
import { handlers } from './mocks/handlers';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  worker.start(...handlers);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
