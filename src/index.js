import React from "react";
import ReactDOM from "react-dom";

import {CartProvider} from './tools/cartcontext';
import {FFMenuContextProvider} from './tools/ffmenucontext';

import Main from './main';

import './css/core.css';
import './css/theme-beige.css';
import './scss/main.scss';
 
ReactDOM.render(
  <FFMenuContextProvider>
    <CartProvider>
      <Main />
    </CartProvider>
  </FFMenuContextProvider>, 
  document.getElementById("body-wrapper")
);