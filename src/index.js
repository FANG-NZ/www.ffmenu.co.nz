import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';

import Main from './main';

import './css/core.css';
import './css/theme-beige.css';
 
ReactDOM.render(
  (
    <Router>
      <Main />
    </Router>
  ), 
  document.getElementById("body-wrapper")
);