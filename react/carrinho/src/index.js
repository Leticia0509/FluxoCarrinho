import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Codigos/Home'

import './index.css'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <Switch>
      <Route path="/home" exact={true} component={Home} />
    </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);