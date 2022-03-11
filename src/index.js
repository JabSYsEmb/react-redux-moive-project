import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store/store";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

const btn = document.querySelector("#toggle-navbar");
const menu = document.querySelector("#mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});