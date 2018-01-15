import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App'

const PageStyle = props =>(
  <div className="page">{props.children}</div>
)

render(
  <BrowserRouter>
  <PageStyle>
    <App/>
  </PageStyle>
  </BrowserRouter>,
  document.getElementById('root')
)