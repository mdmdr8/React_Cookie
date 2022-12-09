import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom'

//    <BrowserRouter> 안에는 <routes> and <router>가 들어 있는데 그 사이에 다른 태그가 들어가면 안된다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CookiesProvider>
);

reportWebVitals();
