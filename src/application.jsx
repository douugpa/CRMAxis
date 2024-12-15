import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { Authentication } from './app/Context/auth';

/* PAGES */
import Site from './site/Site';
import Login from './app/Login/log-in';
import NewAcc from './app/NewAcc/newAcc';
import ResetPassword from './app/ResetPassword/resetpassword';
import Main from './app/Main/main';
import NewClient from './app/NewClient/newclient';
import UpdateClient from './app/UpdateClient/updateclient';

function App(){

  function SecureRoute({ element: Component, ...params }) {
    const { loged } = React.useContext(Authentication);
    return loged ? <Component {...params} /> : <Navigate to="/app" />;
}

  return <BrowserRouter>
    <Routes>
      <Route exact path='/' Component={Site} />
      <Route exact path='/app' Component={Login} />
      <Route exact path='/app/CriarConta' Component={NewAcc} />
      <Route exact path='/app/RecuperarSenha' Component={ResetPassword} />
      <Route exact path='/app/Home' element={<SecureRoute element={Main} />} />
      <Route exact path='/app/NovoCliente' element={<SecureRoute element={NewClient} />} />
      <Route exact path='/app/EditarCliente/:id' element={<SecureRoute element={UpdateClient} />} />
    </Routes>
  </BrowserRouter>;
}

export default App;