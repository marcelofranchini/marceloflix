import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Video from './pages/cadastro/video';
import Categoria from './pages/cadastro/categoria';
import { Route, BrowserRouter, Switch } from 'react-router-dom'


const Pagina404 = ()=> <div>Página 404</div>
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/cadastro/video' component={Video} exact/>
    <Route path='/cadastro/categoria' component={Categoria} exact/>
    <Route  component={Pagina404} />

    </Switch>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
