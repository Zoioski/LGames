import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/home';
import MeuPerfil from './pages/MeuPerfil';
import Produto from './pages/Produto';
import Registrar from './pages/CriarConta'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Login} />
        <Route path="/Jogos" exact component={Home} />
        <Route path="/Perfil" component={MeuPerfil} />
        <Route path="/Produto" component={Produto} />
        <Route path="/register" component={Registrar} />
        <Route path='/pagamento' component={() => { window.location = 'https://www.paypal.com/br/signin'; return null; }} />
      </Switch>
    </BrowserRouter>
  );
}
