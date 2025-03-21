import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/global.css';
import ApiProvider from './context/ApiProvider';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('can not find root in the dom');
}
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
